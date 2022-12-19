FROM node:16.19.0-alpine

RUN npm install -g npm@latest
RUN npm install -g yarn@latest --force

WORKDIR /workspace/vue_frontend