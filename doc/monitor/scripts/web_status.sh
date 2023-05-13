#!/bin/bash
#Get the http status code of the website
web_code=`/usr/bin/curl -I -s -m 10 https://ssv-operators-test.nodeplus.io/ |grep HTTP|awk '{print $2}'`
if [ $web_code==200 ]
then	
   echo ssv_operators_web_status 2 > /usr/local/node_exporter/key/ssv-operators-web-status.prom
else
   echo ssv_operators_web_status 0 > /usr/local/node_exporter/key/ssv-operators-web-status.prom
fi
