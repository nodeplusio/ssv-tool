#!/bin/bash
rm -f sum_data.txt
#The network of the validator,must be "mainnet" or "goerli"
network=$1
# Validate the network parameter
if [ "$network" != "mainnet" ] && [ "$network" != "goerli" ]; then
    echo "Error: Invalid network parameter. It must be './eth_earning.sh mainnet' or './eth_earning.sh goerli'."
    exit 1
fi
#The index of the validator that needs to be statisticsed
indexs=380081,38080

#Get data from api of beaconcha.in
data=`/usr/bin/curl -X 'GET' \
'https://'$network'.beaconcha.in/api/v1/validator/'$indexs'/performance' \
 -H 'accept: application/json'`

#Extract the value of the balance field from the JSON and sum it
balance_sum=$(echo $data | /usr/bin/jq -r '.data[].balance' | awk '{s+=$1} END {print s}')

#Extract the value of the performance1d field from the JSON and sum it
performance1d_sum=$(echo $data | /usr/bin/jq -r '.data[].performance1d' | awk '{s+=$1} END {print s}')

#Extract the value of the performance31d field from the JSON and sum it
performance31d_sum=$(echo $data | /usr/bin/jq -r '.data[].performance31d' | awk '{s+=$1} END {print s}')

#Extract the value of the performance365d field from the JSON and sum it
performance365d_sum=$(echo $data | /usr/bin/jq -r '.data[].performance365d' | awk '{s+=$1} END {print s}')

#Extract the value of the performance7d field from the JSON and sum it
performance7d_sum=$(echo $data | /usr/bin/jq -r '.data[].performance7d' | awk '{s+=$1} END {print s}')

#Extract the value of the performancetoday field from the JSON and sum it
performancetoday_sum=$(echo $data | /usr/bin/jq -r '.data[].performancetoday' | awk '{s+=$1} END {print s}')

#Output result
echo "balance_sum: $balance_sum" >> sum_data.txt
echo "performance1d: $performance1d_sum" >> sum_data.txt
echo "performance7d: $performance7d_sum" >> sum_data.txt
echo "performance31d: $performance31d_sum" >> sum_data.txt
echo "performance365d: $performance365d_sum" >> sum_data.txt
echo "performancetotal: $performancetotal_sum" >> sum_data.txt

awk -F':' '{arr[$1]+=$2} END {for (i in arr) print i " " arr[i]}' sum_data.txt > result_data.txt
IFS=$'\n'
for line in `cat result_data.txt`;do
result=$(echo "$line" | awk '{printf "%.9f", $2/1000000000}')
echo "${line% *} $result"
done

