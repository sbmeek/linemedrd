FROM node:14.17.1-alpine3.13 AS build-client
WORKDIR /app/client
RUN ls
COPY ./client/package*.json ./
RUN npm i --no-optional
COPY ./client ./
RUN npm run build \
	&& npm prune --production

FROM node:14.17.1-alpine3.13
WORKDIR /app/server
COPY ./server/package*.json ./
RUN npm i
COPY ./server ./
RUN npm i -g @nestjs/cli \
	&& npm run build \
	&& npm prune --production \
	&& mkdir ../build \
	&& mv -fin ./dist ./node_modules ./package.json ./.env ../build \
	&& cd .. && rm -rf ./server \
	&& mv ./build ./server
COPY --from=build-client /app/client/build /app/client/build
ENV PORT=3001
EXPOSE 3001
CMD [ "npm", "run", "start:prod" ]