FROM node:14.17.1-alpine3.13 AS dev
WORKDIR /app/client
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]

FROM node:14.17.1-alpine3.13 AS prod
WORKDIR /app/client
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build \
	&& npm install -g serve \
	&& npm prune --production
EXPOSE 3002
CMD [ "serve", "-s", "./", "-l", "3002" ]