FROM node:17-alpine as build

WORKDIR /app

COPY package.json .
RUN npm install

COPY . . 
RUN npm run build

FROM nginx:1.21.6-alpine as release

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
#ENTRYPOINT ["npm", "run", "start"]

