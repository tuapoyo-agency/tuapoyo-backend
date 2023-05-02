FROM node:18.12.1

WORKDIR /sweet-home

COPY package*.json ./

ENV NODE_ENV=production

RUN npm ci 

COPY . .

EXPOSE 4568

CMD [ "node", "index.js" ]
