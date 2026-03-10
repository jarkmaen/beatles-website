#!/bin/bash

source /home/ubuntu/beatles-website/.env

TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")

IP=$(curl -H "X-aws-ec2-metadata-token: $TOKEN" -s http://169.254.169.254/latest/meta-data/public-ipv4)

curl -X PATCH https://api.cloudflare.com/client/v4/zones/$CF_ZONE_ID/dns_records/$CF_RECORD_ID \
    -H "Authorization: Bearer $CF_API_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{
          \"content\": \"$IP\",
          \"name\": \"fabtwo.net\",
          \"proxied\": true,
          \"ttl\": 1,
          \"type\": \"A\"
        }"

echo "DNS updated to $IP."
