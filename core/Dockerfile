FROM node:18-alpine3.15
WORKDIR /core
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install && npm run build

CMD [ "npm", "start" ]