# config

## config .env
example: .env-example
```
INFURA_API_KEY=<infura api key>
SIGNER_PRIVATE_KEY=<owner address private key>
```

## config keystore
put keystore file into keystore/ directory

example: keystore/example-keystore.json

# register validator

```
npm run register-validator <operator-id-1> <operator-id-2> <operator-id-3> <operator-id-4> <keystore-file-name> <keystore-password>

```

example:
```
npm run register-validator 958 24 91 4 example-keystore.json 11111111
```

# estimate fee
```
npm run estimate-fee <owner-address>
```

example:
```
npm run estimate-fee 0xF0d1ed42D079459023a9a2501c94B83D52780492
```

# operator candidates
```
npm run operator-candidates
```

# useful links

- ssv account portal https://app.ssv.network/my-account
- ssv swagger https://api.ssv.network/documentation/#/
- ssv goerli contract https://goerli.etherscan.io/address/0xb9e155e65B5c4D66df28Da8E9a0957f06F11Bc04
- ssv faucet https://faucet.ssv.network/