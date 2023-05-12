#!/bin/bash
rm -f sum_data.txt

#需要统计的validator的index
indexs=380081,38080

#从beaconcha.in的接口获取数据
data=`/usr/bin/curl -X 'GET' \
'https://goerli.beaconcha.in/api/v1/validator/'$indexs'/performance' \
 -H 'accept: application/json'`

# 从JSON中提取balance字段的值，并求和
balance_sum=$(echo $data | /usr/bin/jq -r '.data[].balance' | awk '{s+=$1} END {print s}')

# 从JSON中提取performance1d字段的值，并求和
performance1d_sum=$(echo $data | /usr/bin/jq -r '.data[].performance1d' | awk '{s+=$1} END {print s}')

# 从JSON中提取performance31d字段的值，并求和
performance31d_sum=$(echo $data | /usr/bin/jq -r '.data[].performance31d' | awk '{s+=$1} END {print s}')

# 从JSON中提取performance365d字段的值，并求和
performance365d_sum=$(echo $data | /usr/bin/jq -r '.data[].performance365d' | awk '{s+=$1} END {print s}')

# 从JSON中提取performance7d字段的值，并求和
performance7d_sum=$(echo $data | /usr/bin/jq -r '.data[].performance7d' | awk '{s+=$1} END {print s}')

# 从JSON中提取performancetoday字段的值，并求和
performancetoday_sum=$(echo $data | /usr/bin/jq -r '.data[].performancetoday' | awk '{s+=$1} END {print s}')

# 从JSON中提取performancetotal字段的值，并求和
performancetotal_sum=$(echo $data | /usr/bin/jq -r '.data[].performancetotal' | awk '{s+=$1} END {print s}')


# 输出结果
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

