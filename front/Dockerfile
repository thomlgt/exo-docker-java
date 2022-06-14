### STAGE 1:BUILD ###
FROM node:14-alpine3.12 AS build
WORKDIR /dist/src/app
COPY . .
RUN npm install
RUN npm run build --prod

### STAGE 2:RUN ###
FROM nginx:latest AS ngi
COPY --from=build /dist/src/app/dist/front /usr/share/nginx/html
# COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
