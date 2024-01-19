# Version
version 1.0 supports SSV V4 API and contract.
Both mainnet and testnet are supported, it can be config in .env file [example](./.env-example)

# Requirement

**nodejs version 16**

```
npm install
```

# Config

## Config .env
example: [.env-example](.env-example)
```
#goerli
INFURA_API=https://goerli.infura.io/v3/
INFURA_API_KEY=

#goerli
NETWORK=prater

#goerli
SIGNER_PRIVATE_KEY=

#goerli
API=https://api.ssv.network/api/v4/prater

#goerli
SSV_CONTRACT_ADDRESS=0xC3CD9A0aE89Fff83b71b58b6512D43F8a41f363D
```

## Config keystore
put keystore file into keystore/ directory

example: keystore/example-keystore.json

# Register Validator

pre-requirement:
1. make sure enough $SSV in admin address
2. grant enough allowance to SSV contract as spender

```
// a new cluster is created if no existing [id1, id2, id3, id4] pair is found.
npm run register-validator <operator-id-1> <operator-id-2> <operator-id-3> <operator-id-4> <keystore-file-name> <keystore-password>

```

example:
```
npm run register-validator 157 1 2 3 example-keystore.json 11111111
```

# Estimate Fee
```
npm run estimate-fee <cluster-id>
```

example:
```
npm run estimate-fee 93446
```

# Operator Candidates
```
npm run operator-candidates
npm run operator-candidates -- true
```

# Useful Links

- ssv account portal https://app.ssv.network/my-account
- ssv swagger https://api.ssv.network/documentation/#/v4
- ssv goerli contract https://goerli.etherscan.io/address/0xC3CD9A0aE89Fff83b71b58b6512D43F8a41f363D
- ssv faucet https://faucet.ssv.network/
- ssv grafana doc https://docs.ssv.network/run-a-node/operator-node/maintenance/monitoring-grafana 
- approve allowance $SSV
    - example param spender: 0xC3CD9A0aE89Fff83b71b58b6512D43F8a41f363D
    - example param token: 1000000000000000000000
    - link to approve https://goerli.etherscan.io/address/0x3a9f01091C446bdE031E39ea8354647AFef091E7#writeContract#F1
  
