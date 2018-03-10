FROM node:9.6.1
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json 
RUN npm install --silent 
RUN npm install react-scripts@1.1.1 -g --silent
CMD ["npm","start"]