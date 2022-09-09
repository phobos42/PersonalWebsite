FROM node:latest As builder

WORKDIR /usr/src/app

COPY site/package.json site/package-lock.json ./

RUN npm install

COPY ./site/ .

RUN npm run build --prod

FROM nginx:latest

COPY --from=builder /usr/src/app/dist/site/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
