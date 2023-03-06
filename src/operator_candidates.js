import { ethers } from 'ethers'

async function operatorCandidates (shortVersion=false) {
  const resp = await ethers.utils.fetchJson('https://api.ssv.network/api/v2/prater/operators?type=Example%3Averified_operator&page=1&perPage=5000&ordering=performance.30d%3Adesc%2Cvalidator_count%3Adesc')
  const operators = resp.operators
  const operatorCandidates = operators.filter(o => o.is_valid && o.is_active && !o.is_deleted && o.status === 'Active')
    .filter(o => o.validators_count >= 100)
    .filter(o => o.performance['30d'] >= 98)
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