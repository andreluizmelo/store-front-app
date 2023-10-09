FROM node:18-alpine
WORKDIR /app

RUN apk -i update
RUN apk -i upgrade

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile && yarn cache clean

COPY next.config.js ./
COPY public ./public
COPY .next ./.next

EXPOSE 80

CMD [ "yarn", "start"]