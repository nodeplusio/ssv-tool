import { ethersBuild } from './ethers_builder.js'
import fetch from 'node-fetch'
import ethers, { BigNumber } from 'ethers'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { SSVKeys } from 'ssv-keys'

const api = 'https://api.ssv.network/api/v2/prater/operators'

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

  const ssvKeys = new SSVKeys()
  const privateKey = await ssvKeys.getPrivateKeyFromKeystoreData(keystore, keyStorePassword)
  const encryptedShares = await ssvKeys.buildShares(privateKey, operatorIds, operatorPubKeys)

  const sharesPublicKeys = encryptedShares.map(e => e.publicKey)
  const abi = ethers.utils.defaultAbiCoder
  const sharesEncrypted = encryptedShares.map(e =>
    abi.encode(['string'], [e.privateKey])
  )
  console.log(sharesEncrypted)

  const amount = BigNumber.from('0')
  // const amount = BigNumber.from('1056155511050000000')
  const ssvNetwork = await ethersBuild()
  const tx = await ssvNetwork.registerValidator(
    publicKey,
    operatorIds,
    sharesPublicKeys,
    sharesEncrypted,
    amount,
    {
      maxFeePerGas: ethers.utils.parseUnits('20', 'gwei'),
      maxPriorityFeePerGas: ethers.utils.parseUnits('10', 'gwei'),
      gasLimit: 1000000
    }
  )
  console.log('awaiting register tx')
  const txReceipt = await tx.wait()
  console.log(txReceipt)
}

async function fetchOperatorInfo (id) {
  const r = await fetch(`${api}/${id}`)
  return r.json()
}

export { registerValidator }