FROM node:lts-alpine as builder
WORKDIR /usr/app
COPY package.json .
RUN npm

FROM builder as release
# TEMPORARY use results from a file
COPY results/ ../data/

COPY --from=builder /usr/app/node_modules ./node_modules
COPY server/ .
CMD npm run server:docker