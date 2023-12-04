#!/bin/bash
#Get estimated_remaining_days and balance
cd /home/ubuntu/ssv-tool
balance=`/usr/bin/npm run estimate-fee 93446 |grep "balance:" |awk -F ": " '{print $2}'`
balance=$(echo "scale=4;$balance/1000000000000000000" | bc)
estimated_remaining_days=`/usr/bin/npm run estimate-fee 93446 |grep "remaining days:" |awk -F ": " '{print $2}'`
echo balance $balance > /usr/local/node_exporter/key/estimate-operation-fee.prom
echo estimated_remaining_days $estimated_remaining_days >> /usr/local/node_exporter/key/estimate-operation-fee.prom
