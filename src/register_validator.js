import {ethersBuild} from './ethers_builder.js'
import ethers from 'ethers'
import * as fs from 'node:fs';
import * as path from 'node:path';
import assert from 'node:assert/strict';

async function registerValidator(id1,id2,id3,id4,keyShareFileName){
  console.log(`input operator ids: ${id1},${id2},${id3},${id4}`)
  console.log(`key share file name: ${keyShareFileName}`)

  const keyShareFile = fs.readFileSync(path.resolve('.', 'keyshare', `${keyShareFileName}`), 'utf-8')
  const keyShare = JSON.parse(keyShareFile);

  //prepare contract params
  const publicKey = keyShare.data.publicKey;
  console.log(`publicKey: ${publicKey}`)
  assert.ok(publicKey)
  const operatorIds = [
    keyShare.data.operators[0].id,
    keyShare.data.operators[1].id,
    keyShare.data.operators[2].id,
    keyShare.data.operators[3].id,
  ]
  console.log(`operator ids: ${operatorIds}`)
  assert.deepEqual([parseInt(id1),parseInt(id2),parseInt(id3),parseInt(id4)],operatorIds)
  const sharesPublicKeys = keyShare.data.shares.publicKeys
  console.log(`sharesPublicKeys: ${sharesPublicKeys}`)
  assert.ok(sharesPublicKeys)
  assert.equal(sharesPublicKeys.length, 4)
  const sharesEncrypted = keyShare.data.shares.encryptedKeys.map((b)=>
    ethers.utils.hexlify(ethers.utils.base64.decode(b))
  )
  console.log(`sharesEncrypted: ${sharesEncrypted}`)
  assert.ok(sharesEncrypted)
  assert.equal(sharesEncrypted.length, 4)
  const amount = 0;

  const ssvNetwork = await ethersBuild();
  const tx = await ssvNetwork.registerValidator(
    publicKey,
    operatorIds,
    sharesPublicKeys,
    sharesEncrypted,
    amount,
    {gasPrice: ethers.utils.parseUnits('100', 'gwei'), gasLimit: 1000000}
  );
  const txReceipt = await tx.wait();
  console.log(txReceipt)
}

async function getOperatorFee(id){
  // const ssvNetwork = await ethersBuild();
  // const r =await  ssvNetwork.getOperatorFee(id)
  // console.log(r)
}

export {registerValidator}