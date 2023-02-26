import { ethersBuild } from './ethers_builder.js'
import { BigNumber } from 'ethers'

async function estimateFee(ownerAddress){
  console.log(`estimate operation fee for address: ${ownerAddress}`)

  const ssvNetwork = await ethersBuild()
  const burnRate = await ssvNetwork.getAddressBurnRate(ownerAddress)
  const balance = await ssvNetwork.getAddressBalance(ownerAddress)
  const liquidationPeriod = await ssvNetwork.getLiquidationThresholdPeriod();

  const balanceThreshold = BigNumber.from(2)
    .mul(liquidationPeriod)
    .mul(burnRate)

  const balanceThresholdWarning = BigNumber.from(3)
    .mul(liquidationPeriod)
    .mul(burnRate)

  console.log(`balance threshold: ${balanceThreshold.toString()}`)
  console.log(`balance threshold warning: ${balanceThresholdWarning.toString()}`)
  console.log(`balance: ${balance.toString()}`)

  if(!burnRate.isZero()){
    const estimateDays = balance.div(burnRate).div(7100).sub(30)
    console.log(`estimated remaining days: ${estimateDays}`)
  }

}

export {estimateFee}