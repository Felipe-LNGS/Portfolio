FROM node:24
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
EXPOSE 3042
CMD ["npm", "run", "dev"]
