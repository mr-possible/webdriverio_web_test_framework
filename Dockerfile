FROM ianwalter/puppeteer:latest

WORKDIR /app

COPY package*.json ./
COPY ./test ./test
COPY tsconfig.json wdio.conf.ts wdio.remote.conf.ts ./

RUN npm install
RUN npm install @wdio/cli

CMD npm run test:remote