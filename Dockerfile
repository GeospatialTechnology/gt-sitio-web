FROM node:18.16.0-buster-slim as builder
RUN apt-get update && apt-get install -y bzip2
WORKDIR /app
COPY package*.json ./

RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:alpine
EXPOSE 80
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
