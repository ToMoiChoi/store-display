
FROM node:18-alpine

WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
