FROM node:latest as prep

WORKDIR /app

COPY . /app

ENV PATH /app/node_modules/.bin:$PATH

RUN ["npm", "install"]

FROM prep as build

RUN ["npm", "run", "build"]

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN ["rm", "/etc/nginx/conf.d/default.conf"]

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]