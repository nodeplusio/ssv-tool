import * as dotenv from 'dotenv'
dotenv.config()

const INFURA_API_KEY = process.env.INFURA_API_KEY
const SIGNER_PRIVATE_KEY = process.env.SIGNER_PRIVATE_KEY
const ssvNetworkAddress = "0xb9e155e65b5c4d66df28da8e9a0957f06f11bc04"
import abi from './abi.js'
import { ethers } from "ethers";


async function ethersBuild(){
  const provider = new ethers.providers.InfuraProvider("goerli", INFURA_API_KEY);
  const signer = new ethers.Wallet(SIGNER_PRIVATE_KEY, provider);
  let ssvNetwork = new ethers.Contract(ssvNetworkAddress, abi)
  ssvNetwork = ssvNetwork.connect(signer)

  return ssvNetwork;
}

export {ethersBuild}