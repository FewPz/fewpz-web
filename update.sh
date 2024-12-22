#!/bin/bash
git pull
docker stop fewpz-web
docker rm fewpz-web
docker build -t fewpz-web .
docker run -d -p 4826:3000 --name fewpz-web fewpz-web