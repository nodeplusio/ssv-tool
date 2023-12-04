#!/bin/bash
#The network of the validator,must be "mainnet" or "goerli"
network=$1
# Validate the network parameter
if [ "$network" != "mainnet" ] && [ "$network" != "goerli" ]; then
    echo "Error: Invalid network parameter. It must be './eth_validator_info.sh mainnet' or './eth_validator_info.sh goerli'."
    exit 1
fi
#The index of the validator that needs to be statisticsed
indexs=380081,38080

#Get data from api of beaconcha.in
data=`/usr/bin/curl -X 'GET' \
  'https://'$network'.beaconcha.in/api/v1/validator/'$indexs'' \
  -H 'accept: application/json'`

#Extract the value of the pubkey field from JSON
validator_pubkey=$(echo $data | /usr/bin/jq -r '.data[].pubkey')
readarray -t pubkey <<< "$validator_pubkey"

#Extract the value of the balance field from JSON
validator_balance=$(echo $data | /usr/bin/jq -r '.data[].balance')
readarray -t balance <<< "$validator_balance"

#Extract the value of the status field from JSON
validator_status=$(echo $data | /usr/bin/jq -r '.data[].status')
readarray -t status <<< "$validator_status"

#Output result
for (( i=0; i<${#pubkey[@]}; i++ )); do
    echo validator_info\{pubkey=\"${pubkey[i]}\"\,status=\"${status[i]}\"\} $(echo ${balance[i]} | awk '{printf "%.9f", $1/1000000000}')
done
