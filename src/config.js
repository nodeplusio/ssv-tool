import * as dotenv from 'dotenv'
import abi from './abi.js'
import { BigNumber } from 'ethers'

dotenv.config()

const NETWORK = process.env.NETWORK
const API = process.env.API
const INFURA_API = process.env.INFURA_API
const INFURA_API_KEY = process.env.INFURA_API_KEY
const SIGNER_PRIVATE_KEY = process.env.SIGNER_PRIVATE_KEY
const SSV_CONTRACT_ADDRESS = process.env.SSV_CONTRACT_ADDRESS
const ABI = abi
const VALIDATOR_COUNT_THRESHOLD = 20
const PERFORMANCE_30D_THRESHOLD = 98
const AMOUNT_NEW_CLUSTER = BigNumber.from('10000000000000000000')
const AMOUNT_EXISTING_CLUSTER = BigNumber.from('0')

export {
  NETWORK,
  API,
  INFURA_API,
  INFURA_API_KEY,
  SIGNER_PRIVATE_KEY,
  SSV_CONTRACT_ADDRESS,
  ABI,
  VALIDATOR_COUNT_THRESHOLD,
  PERFORMANCE_30D_THRESHOLD,
  AMOUNT_NEW_CLUSTER,
  AMOUNT_EXISTING_CLUSTER,
}