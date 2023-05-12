import { ethersBuild } from './ethers_builder.js'
import fetch from 'node-fetch'
import ethers, { BigNumber } from 'ethers'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { SSVKeys } from 'ssv-keys'

const api = 'https://api.ssv.network/api/v3/prater'
const AMOUNT_NEW_CLUSTER = BigNumber.from('10000000000000000000')

async function registerValidator (id1, id2, id3, id4, keyStoreFileName, keyStorePassword) {
  console.log(`input operator ids: ${id1},${id2},${id3},${id4}`)
  console.log(`key store file name: ${keyStoreFileName}`)

  const operatorIds = [parseInt(id1), parseInt(id2), parseInt(id3), parseInt(id4)]

  let operatorPubKeys = []
  for (const opId of operatorIds) {
    const op = await fetchOperatorInfo(opId)
    operatorPubKeys.push(op.public_key)
  }

  const keystoreFile = fs.readFileSync(path.resolve('.', 'keystore', `${keyStoreFileName}`), 'utf-8')
  const keystore = JSON.parse(keystoreFile)
  const publicKey = `0x${keystore.pubkey}`

  const ssvKeys = new SSVKeys(SSVKeys.VERSION.V3)
  const privateKey = await ssvKeys.getPrivateKeyFromKeystoreData(keystore, keyStorePassword)
  const threshold = await ssvKeys.createThreshold(privateKey, operatorIds)
  const encryptedShares = await ssvKeys.encryptShares(operatorPubKeys, threshold.shares)
  let payload = await ssvKeys.buildPayload({
      publicKey,
      operatorIds,
      encryptedShares
    }
  )

  let amount = BigNumber.from('0')
  const ssvNetwork = await ethersBuild()
  const owner = await ssvNetwork.signer.getAddress()
  const clusterParam = await buildClusterParam(owner, operatorIds)
  if(clusterParam.validatorCount===0){
    amount = AMOUNT_NEW_CLUSTER
  }

  const tx = await ssvNetwork.registerValidator(
    publicKey,
    operatorIds,
    payload.readable.shares,
    amount,
    clusterParam,
    {
      //goerli test use only
      maxFeePerGas: ethers.utils.parseUnits('5000', 'gwei'),
      maxPriorityFeePerGas: ethers.utils.parseUnits('30', 'gwei'),
      gasLimit: 300000
    }
  )
  console.log('awaiting register tx')
  const txReceipt = await tx.wait()
  console.log(txReceipt)
}

async function fetchOperatorInfo (id) {
  const r = await fetch(`${api}/operators/${id}`)
  return r.json()
}

async function fetchClusterInfo (owner) {
  const r = await fetch(`${api}/clusters/owner/${owner}?page=1&perPage=100`)
  return r.json()
}

async function buildClusterParam (owner, operatorIds) {
  const clusterResp = await fetchClusterInfo(owner)
  let clusterParam = {
    validatorCount: 0,
    networkFeeIndex: 0,
    index: 0,
    balance: 0,
    active: true
  }
  if (clusterResp.clusters.length !== 0) {
    for(const c of clusterResp.clusters){
      if(c.operators.length === operatorIds.length){
        const sortedC = c.operators.sort(function (a, b) {  return a - b;  })
        const sortedO = operatorIds.sort(function (a, b) {  return a - b;  })
        if(sortedC[0]===sortedO[0] &&
          sortedC[1]===sortedO[1] &&
          sortedC[2]===sortedO[2] &&
          sortedC[3]===sortedO[3]
        ){
          clusterParam = {
            validatorCount: clusterResp.clusters[0].validator_count,
            networkFeeIndex: clusterResp.clusters[0].network_fee_index,
            index: clusterResp.clusters[0].index,
            balance: BigNumber.from(clusterResp.clusters[0].balance),
            active: true
          }
        }
      }
    }
  }
  return clusterParam
}

export { registerValidator }
