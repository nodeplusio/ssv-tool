import { ethers } from 'ethers'
import { ABI, INFURA_API_KEY, SIGNER_PRIVATE_KEY, SSV_CONTRACT_ADDRESS } from './config.js'

async function ethersBuild () {
  const provider = new ethers.providers.InfuraProvider('goerli', INFURA_API_KEY)
  const signer = new ethers.Wallet(SIGNER_PRIVATE_KEY, provider)
  let ssvNetwork = new ethers.Contract(SSV_CONTRACT_ADDRESS, ABI)
  ssvNetwork = ssvNetwork.connect(signer)

  return ssvNetwork
}

export { ethersBuild }