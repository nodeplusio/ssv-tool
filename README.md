# Requirement

**nodejs version 16**

```
npm install
```

# Config

## Config .env
example: .env-example
```
INFURA_API_KEY=<infura api key>
SIGNER_PRIVATE_KEY=<owner address private key>
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
npm run estimate-fee 0x1f7f5a9ed7aeb9da2a81478ec8c2b853163bc8db498c488be8d3c20cc9c2f148
```

# Operator Candidates
```
npm run operator-candidates
```

# Useful Links

- ssv account portal https://app.ssv.network/my-account
- ssv swagger https://api.ssv.network/documentation/#/
- ssv goerli contract https://goerli.etherscan.io/address/0xb9e155e65B5c4D66df28Da8E9a0957f06F11Bc04
- ssv faucet https://faucet.ssv.network/
- ssv grafana doc https://docs.ssv.network/run-a-node/operator-node/maintenance/monitoring-grafana 
- approve allowance $SSV
    - example tx https://goerli.etherscan.io/tx/0x6c8360c864671bd45c9a2f58ab7cf68632aab22c3f394c7379f92bad66b74d75
    - example param spender: 0xAfdb141Dd99b5a101065f40e3D7636262dce65b3
    - example param token: 100000000000000000000
    - link to approve https://goerli.etherscan.io/address/0x3a9f01091c446bde031e39ea8354647afef091e7#writeContract
  
