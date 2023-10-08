FROM node:18-buster
WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile && yarn cache clean

COPY next.config.js ./
COPY public ./public
COPY .next ./.next

EXPOSE 80

CMD [ "yarn", "start"]