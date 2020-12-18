FROM node:14.15.1
WORKDIR /index
COPY package.json /index
RUN npm install
COPY . /index
CMD ["npm","start"]