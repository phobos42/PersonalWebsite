FROM node:14.17.0-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY site/package.json /app
RUN npm install
COPY site/ /app
RUN npm run build --prod

FROM nginx:1.20.1
COPY --from=build-step /app/dist/site /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200:80