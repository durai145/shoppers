# MAINTAINER Jayagopal Govindaraj <jayagopal.govindaraj@heaerieglobalsolutions.com>

# base image
FROM node:12.2.0

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies

# add app
COPY package.json /app/package.json
RUN npm install -g npm
RUN npm install -g @angular/cli
RUN npm install
RUN npm i -g browserslist caniuse-lite 
RUN npm update -y
RUN apt-get install net-tools
COPY . /app
EXPOSE 4200
# start app
#ENTRYPOINT ["ng"]
CMD ["ng" , "serve", "--disableHostCheck=false", "--port=4200"]