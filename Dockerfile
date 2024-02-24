FROM alpine:latest

RUN apk update && \
    apk add --no-cache nodejs npm

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install @wdio/cli

COPY ./test ./test
COPY tsconfig.json wdio.conf.ts wdio.remote.conf.ts ./

CMD npm run test