FROM node
# ENV NODE_ENV development
WORKDIR /app
COPY package.json .
# COPY yarn.lock .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]