FROM node:10
WORKDIR /code
COPY package*.json ./
RUN yarn
COPY . .
CMD ["yarn", "start"]