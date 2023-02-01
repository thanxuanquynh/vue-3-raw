FROM node:16.19.0-alpine

RUN apk add git npm
RUN npm install -g yarn@latest --force

WORKDIR /workspace/vue_frontend