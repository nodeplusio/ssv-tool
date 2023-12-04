#!/bin/bash
#The web must be "ssv-operators" or "ssv-operators-test"
web=$1
# Validate the web parameter
if [ "$web" != "ssv-operators" ] && [ "$web" != "ssv-operators-test" ]; then
    echo "Error: Invalid network parameter. It must be './web_status.sh ssv-operators' or './web_status.sh ssv-operators-test'."
    exit 1
fi
#Get the http status code of the website
web_code=`/usr/bin/curl -I -s -m 10 https://$web.nodeplus.io/ |grep HTTP|awk '{print $2}'`
if [ "$web_code" == "200" ];
then	
   echo ssv_operators_web_status 2 > /usr/local/node_exporter/key/ssv-operators-web-status.prom
else
   echo ssv_operators_web_status 0 > /usr/local/node_exporter/key/ssv-operators-web-status.prom
fi
