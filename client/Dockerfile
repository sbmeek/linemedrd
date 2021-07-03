FROM node:14.17.1-alpine3.13
WORKDIR /app/client
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build \
	&& npm install -g serve \
	&& npm prune --production
EXPOSE 3002
CMD [ "serve", "-s", "./", "-l", "3002" ]