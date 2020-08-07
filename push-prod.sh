#!/bin/bash

if [ "$#" -ne 1 ]; then
  echo "Usage: ./push-prod.sh <message>"
elif [ ! -d "../prod-master/" ]; then
  echo "../prod-master/ is not a valid directory"
else
  rm -rf ../prod-master/cp-uni
  cp -r ./build ../prod-master/cp-uni
  cd ../prod-master
  git add ./cp-uni
  git commit -m "$1"
  git push origin master
  ssh -t aidan@abarbieux.com "cd ~/web/prod-master/ ; rm -rf ./build ; git fetch --all ; git reset --hard origin/master ; pm2 restart frontend ; exit ; bash"
fi
