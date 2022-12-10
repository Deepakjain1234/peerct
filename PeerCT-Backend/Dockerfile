FROM node:16

WORKDIR /app

COPY ./ /app/

RUN npm install

RUN npx sequelize-cli db:drop
RUN npx sequelize-cli db:create
RUN npx sequelize-cli db:migrate


CMD ["node","/app/index.js"]