#!/bin/bash
#获取estimated_remaining_days及balance
cd /home/ubuntu/ssv-tool
balance=`/usr/bin/npm run estimate-fee 0xc241df0fcbc5bee022559305bf9638cfb837a7c89cc2f4a1b13d92c1c96230cc |grep "balance:" |awk -F ": " '{print $2}'`
balance=$(echo "scale=4;$balance/1000000000000000000" | bc)
estimated_remaining_days=`/usr/bin/npm run estimate-fee 0xc241df0fcbc5bee022559305bf9638cfb837a7c89cc2f4a1b13d92c1c96230cc |grep "remaining days:" |awk -F ": " '{print $2}'`
echo balance $balance > /usr/local/node_exporter/key/estimate-operation-fee.prom
echo estimated_remaining_days $estimated_remaining_days >> /usr/local/node_exporter/key/estimate-operation-fee.prom
