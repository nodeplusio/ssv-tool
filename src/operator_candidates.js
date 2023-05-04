import { ethers } from 'ethers'

const api = 'https://api.ssv.network/api/v3/prater/operators'
const VALIDATOR_COUNT_THRESHOLD = 20
const PERFORMANCE_30D_THRESHOLD = 98

async function operatorCandidates (shortVersion=false) {
  const url = `${api}?type=verified_operator&page=1&perPage=5000&ordering=performance.30d%3Adesc%2Cvalidator_count%3Adesc`
  const resp = await ethers.utils.fetchJson(url)
  const operators = resp.operators
  const operatorCandidates = operators.filter(o => o.is_valid && o.is_active && !o.is_deleted && o.status === 'Active')
    .filter(o => o.validators_count >= VALIDATOR_COUNT_THRESHOLD)
    .filter(o => o.performance['30d'] >= PERFORMANCE_30D_THRESHOLD)
  console.log(`operator candidates count: ${operatorCandidates.length}`)
  if(shortVersion){
    const shorten = operatorCandidates.map(o => {
      const performance= Number(o.performance['30d'] /100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});

      return {
        id:o.id,
        name:o.name,
        logo:o.logo,
        validators: o.validators_count,
        performance
      }
    })
    console.log(shorten)
  }else{
    console.log(operatorCandidates)
  }
}

export { operatorCandidates }