#!/bin/bash

set -e

if [ ! $(command -v aws) ]; then
    echo 'awscli is not installed. install with "brew install awscli"'
    exit 1;
fi

npm run build
aws s3 sync --delete build/ s3://kirby64.bschlenk.com
