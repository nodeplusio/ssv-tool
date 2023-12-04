import { ethersBuild } from './ethers_builder.js'
import fetch from 'node-fetch'
import { BigNumber } from 'ethers'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { KeyShares, SSVKeys } from 'ssv-keys'
import { ClusterScanner, NonceScanner } from 'ssv-scanner';
import {
  NETWORK,
  API,
  INFURA_API,
  SSV_CONTRACT_ADDRESS,
  AMOUNT_NEW_CLUSTER,
  AMOUNT_EXISTING_CLUSTER, INFURA_API_KEY,
} from './config.js'

async function registerValidator (id1, id2, id3, id4, keyStoreFileName, keyStorePassword) {
  console.log(`input operator ids: ${id1},${id2},${id3},${id4}`)
  console.log(`key store file name: ${keyStoreFileName}`)

  let operatorIds = [parseInt(id1), parseInt(id2), parseInt(id3), parseInt(id4)]
  operatorIds.sort(function(a, b) {
    return a - b;
  });
  let operatorPubKeys = []
  for (const opId of operatorIds) {
    const op = await fetchOperatorInfo(opId)
    operatorPubKeys.push(
      {
        id: opId,
        operatorKey: op.public_key
      }
    )
  }

  const keystoreFile = fs.readFileSync(path.resolve('.', 'keystore', `${keyStoreFileName}`), 'utf-8')
  const keystore = JSON.parse(keystoreFile)
  //init amount using existing cluster, may be modified later
  let amount = BigNumber.from(AMOUNT_EXISTING_CLUSTER)
  const ssvNetwork = await ethersBuild()
  const ownerAddress = await ssvNetwork.signer.getAddress()
  const nodeUrl = `${INFURA_API}${INFURA_API_KEY}`
  const params = {
    nodeUrl, // this can be an Infura, or Alchemy node, necessary to query the blockchain
    contractAddress: SSV_CONTRACT_ADDRESS, // this is the address of SSV smart contract
    ownerAddress, // this is the wallet address of the cluster owner
    operatorIds, // this is a list of operator IDs chosen by the owner for their cluster
    network: NETWORK //https://github.com/bloxapp/ssv-scanner/blob/main/src/lib/contract.provider.ts
  }
  const nonceScanner = new NonceScanner(params);
  const ownerNonce = await nonceScanner.run();
  // ClusterScanner is initialized with the given parameters
  const clusterScanner = new ClusterScanner(params);
  // and when run, it returns the Cluster Snapshot
  const result = await clusterScanner.run(params.operatorIds);
  const clusterData = result.cluster;

  if(clusterData.validatorCount === '0'){
    amount = BigNumber.from(AMOUNT_NEW_CLUSTER);
  }

  const ssvKeys = new SSVKeys()
  const extractedKeys = await ssvKeys.extractKeys(keystore,keyStorePassword)
  const privateKey = extractedKeys.privateKey
  const publicKey = extractedKeys.publicKey
  const threshold = await ssvKeys.createThreshold(privateKey,operatorPubKeys);
  const encryptedShares = await ssvKeys.encryptShares(operatorPubKeys, threshold.shares)
  const keyShares = new KeyShares();
  let keysharePayload = await keyShares.buildPayload({
    publicKey: threshold.publicKey,
    operators: operatorPubKeys,
    encryptedShares
  },{
    ownerAddress,
    ownerNonce,
    privateKey
  });


  //create tx payload
  const txPayload = new Map();
  txPayload.set('keyStorePublicKey', publicKey);
  txPayload.set('operatorIds', operatorIds);
  txPayload.set('sharesData', keysharePayload.sharesData);
  txPayload.set('totalCost', `${amount}`);
  txPayload.set('clusterData', clusterData);

  // console.log([...txPayload.values()])

  const tx = await ssvNetwork.registerValidator(...txPayload.values(),
    // {
    //   //goerli test use only
    //   maxFeePerGas: ethers.utils.parseUnits('50', 'gwei'),
    //   maxPriorityFeePerGas: ethers.utils.parseUnits('10', 'gwei'),
    //   gasLimit: 300000
    // }
  )
  console.log('awaiting register tx')
  const txReceipt = await tx.wait()
  console.log(txReceipt)
}

async function fetchOperatorInfo (id) {
  const r = await fetch(`${API}/operators/${id}`)
  return r.json()
}

export { registerValidator }
