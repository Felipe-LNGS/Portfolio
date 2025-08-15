FROM node:24
WORKDIR /app
RUN apt-get update && apt-get install -y xdg-utils
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
CMD ["npm", "run", "dev"]