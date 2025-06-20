FROM node:20
WORKDIR /entregafinal-palmajuan
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]