
FROM node:16.20.2-alpine

WORKDIR /app
COPY . .

RUN npm install

CMD ["npm", "run", "production"]