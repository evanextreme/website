FROM node:alpine as build

WORKDIR /app

COPY . /app

ENV PATH /app/node_modules/.bin:$PATH

RUN yarn install

RUN yarn run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]