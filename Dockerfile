FROM node:10-alpine3.10
WORKDIR /code
COPY package*.json /code/
RUN yarn --prod
COPY . /code/
CMD ["yarn", "start"]