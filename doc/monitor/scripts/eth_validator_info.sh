#!/bin/bash
rm -f info_data.txt

#需要统计的validator的index
indexs=380081,38080

#从beaconcha.in的接口获取数据
data=`/usr/bin/curl -X 'GET' \
  'https://goerli.beaconcha.in/api/v1/validator/'$indexs'' \
  -H 'accept: application/json'`

# 从JSON中提取pubkdy字段的值
validator_pubkey=$(echo $data | /usr/bin/jq -r '.data[].pubkey')
readarray -t pubkey <<< "$validator_pubkey"

# 从JSON中提取balance字段的值
validator_balance=$(echo $data | /usr/bin/jq -r '.data[].balance')
readarray -t balance <<< "$validator_balance"

# 从JSON中提取status字段的值
validator_status=$(echo $data | /usr/bin/jq -r '.data[].status')
readarray -t status <<< "$validator_status"


# 输出结果
for (( i=0; i<${#pubkey[@]}; i++ )); do
    echo validator_info\{pubkey=\"${pubkey[i]}\"\,status=\"${status[i]}\"\} $(echo ${balance[i]} | awk '{printf "%.9f", $1/1000000000}')
done
