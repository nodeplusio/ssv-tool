import {ethersBuild} from './ethers_builder.js'
import fetch from 'node-fetch';
import ethers from 'ethers'
import * as fs from 'node:fs';
import * as path from 'node:path';
import assert from 'node:assert/strict';
import {SSVKeys} from 'ssv-keys'
const api = 'https://api.ssv.network/api/v2/prater/operators'

async function registerValidator(id1,id2,id3,id4,keyStoreFileName, keyStorePassword){
  console.log(`input operator ids: ${id1},${id2},${id3},${id4}`)
  console.log(`key store file name: ${keyStoreFileName}`)

  const operatorIds = [parseInt(id1),parseInt(id2),parseInt(id3),parseInt(id4)];

  let operatorPubKeys = [];
  for(const opId of operatorIds){
    const op = await fetchOperatorInfo(opId);
    operatorPubKeys.push(op.public_key)
  }

  const keystoreFile = fs.readFileSync(path.resolve('.', 'keystore', `${keyStoreFileName}`), 'utf-8')
  const keystore = JSON.parse(keystoreFile);
  const publicKey = `0x${keystore.pubkey}`

  const ssvKeys = new SSVKeys();
  const privateKey = await ssvKeys.getPrivateKeyFromKeystoreData(keystore, keyStorePassword)
  const encryptedShares = await ssvKeys.buildShares(privateKey, operatorIds, operatorPubKeys);

  const sharesPublicKeys = encryptedShares.map(e=>e.publicKey)
  const abi = ethers.utils.defaultAbiCoder;
  const sharesEncrypted = encryptedShares.map(e=>
    abi.encode(['string'],[e.privateKey])
  )

  console.log('sending register tx')
  const amount = 0 ;
  const ssvNetwork = await ethersBuild();
  const tx = await ssvNetwork.registerValidator(
    publicKey,
    operatorIds,
    sharesPublicKeys,
    sharesEncrypted,
    amount,
    {
      maxFeePerGas: ethers.utils.parseUnits('200', 'gwei'),
      maxPriorityFeePerGas: ethers.utils.parseUnits('50', 'gwei'),
      gasLimit: 1000000
    }
);
  console.log(tx)
  console.log('awaiting register tx')
  const txReceipt = await tx.wait();
  console.log(txReceipt)


  // const keyShareFile = fs.readFileSync(path.resolve('.', 'keyshare', `${keyShareFileName}`), 'utf-8')
  // const keyShare = JSON.parse(keyShareFile);
  //
  // //prepare contract params
  // const publicKey = keyShare.data.publicKey;
  // console.log(`publicKey: ${publicKey}`)
  // assert.ok(publicKey)
  // const operatorIds = [
  //   keyShare.data.operators[0].id,
  //   keyShare.data.operators[1].id,
  //   keyShare.data.operators[2].id,
  //   keyShare.data.operators[3].id,
  // ]
  // console.log(`operator ids: ${operatorIds}`)
  // assert.deepEqual([parseInt(id1),parseInt(id2),parseInt(id3),parseInt(id4)],operatorIds)
  // const sharesPublicKeys = keyShare.data.shares.publicKeys
  // console.log(`sharesPublicKeys: ${sharesPublicKeys}`)
  // assert.ok(sharesPublicKeys)
  // assert.equal(sharesPublicKeys.length, 4)
  // const sharesEncrypted = keyShare.data.shares.encryptedKeys.map((b)=>
  //   ethers.utils.hexlify(ethers.utils.base64.decode(b))
  // )
  // console.log(`sharesEncrypted: ${sharesEncrypted}`)
  // assert.ok(sharesEncrypted)
  // assert.equal(sharesEncrypted.length, 4)
  // const amount = 0;
  //
  // const ssvNetwork = await ethersBuild();
  // const tx = await ssvNetwork.registerValidator(
  //   publicKey,
  //   operatorIds,
  //   sharesPublicKeys,
  //   sharesEncrypted,
  //   amount,
  //   {gasPrice: ethers.utils.parseUnits('100', 'gwei'), gasLimit: 1000000}
  // );
  // const txReceipt = await tx.wait();
  // console.log(txReceipt)
}

async function fetchOperatorInfo(id){
  const r = await fetch(`${api}/${id}`)
  return r.json()
}


async function getOperatorFee(id){
  // const ssvNetwork = await ethersBuild();
  // const r =await  ssvNetwork.getOperatorFee(id)
  // console.log(r)
}

export {registerValidator}