import { BigNumber } from 'ethers'
import fetch from 'node-fetch'

const api = 'https://api.ssv.network/api/v3/prater'

async function estimateFee(clusterId){
  console.log(`estimate operation fee for cluster: ${clusterId}`)

  const c = await fetchClusterInfo(clusterId)
  console.log(`balance: ${c.cluster.balance}`)
  console.log(`operators: ${c.cluster.operators}`)
  console.log(`validator count: ${c.cluster.validatorCount}`)

  let feeSum = BigNumber.from(0)
  for(const id of c.cluster.operators){
    const operator = await fetchOperatorInfo(id)
    const fee = BigNumber.from(operator.fee)
    feeSum = feeSum.add(fee)
  }

  const remainingDays = BigNumber.from(c.cluster.balance)
    .div(feeSum)
    .div(c.cluster.validatorCount)
    .div(BigNumber.from('8000'))
    .sub(30)

  console.log(`remaining days: ${remainingDays}`)
}

async function fetchClusterInfo (clusterId) {
  const r = await fetch(`${api}/clusters/${clusterId}`)
  return r.json()
}

async function fetchOperatorInfo(operatorId){
  const r = await fetch(`${api}/operators/${operatorId}`)
  return r.json()
}

export {estimateFee}