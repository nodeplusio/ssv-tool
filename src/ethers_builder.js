import * as dotenv from 'dotenv'
import abi from './abi.js'
import { ethers } from "ethers";
dotenv.config()

const INFURA_API_KEY = process.env.INFURA_API_KEY
const SIGNER_PRIVATE_KEY = process.env.SIGNER_PRIVATE_KEY
const ssvNetworkAddress = "0xafdb141dd99b5a101065f40e3d7636262dce65b3"

async function ethersBuild(){
  const provider = new ethers.providers.InfuraProvider("goerli", INFURA_API_KEY);
  const signer = new ethers.Wallet(SIGNER_PRIVATE_KEY, provider);
  let ssvNetwork = new ethers.Contract(ssvNetworkAddress, abi)
  ssvNetwork = ssvNetwork.connect(signer)

  return ssvNetwork;
}

export {ethersBuild}