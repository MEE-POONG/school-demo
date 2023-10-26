
FROM --platform=linux/amd64 node:16.20.2-alpine

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build


CMD ["npm", "run", "production"]