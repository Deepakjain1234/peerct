FROM node:18

WORKDIR /app

COPY ./ /app/

RUN npm install -g --force yarn 
RUN yarn install

CMD ["npm", "run" ,"build"]