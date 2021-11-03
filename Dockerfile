FROM node:14
#Create app directory
WORKDIR /usr/src/app

#install app dependencies
# a wildcard is used to ensure both package.json and package-lock.json
# where avaiable
COPY package*.json ./

RUN npm install

#copy source code in this folder
COPY . .

EXPOSE 4005
CMD ["node","docker-server.js"]
