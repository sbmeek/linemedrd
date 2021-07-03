FROM node:14.17.1-alpine3.13
WORKDIR /app/server
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build \
	&& npm prune --production \
	&& mkdir ../build \
	&& mv -fin ./dist ./node_modules ./package.json ./.env ../build \
	&& cd .. && rm -rf ./server \
	&& cd ./build
ENV PORT=3001
EXPOSE 3001
CMD [ "npm", "run", "start:prod" ]