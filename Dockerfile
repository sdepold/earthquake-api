FROM node:18-alpine AS BUILD_IMAGE

RUN apk update && apk add curl bash python3 g++ make

WORKDIR /srv/api

COPY package.json package-lock.json ./

ENV NPM_CONFIG_LOGLEVEL warn

# install dependencies
RUN npm i

COPY . .

# build application
ENV NODE_ENV production
RUN npm run build

# remove development dependencies
RUN npm prune --production

# run node prune
RUN curl -sf https://gobinaries.com/tj/node-prune | sh

#######################
###### RUN IMAGE ######
#######################

FROM node:18-alpine AS RUN_IMAGE

RUN apk update
RUN rm -rf /var/cache/*

WORKDIR /srv/api
COPY --from=BUILD_IMAGE /srv/api/dist ./dist
COPY --from=BUILD_IMAGE /srv/api/node_modules ./node_modules


ENV NODE_ENV production
EXPOSE 5000
CMD ["node", "dist/index.js"]
