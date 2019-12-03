FROM ubuntu:latest
# MAINTAINER Jayagopal Govindaraj <jayagopal.govindaraj@heaerieglobalsolutions.com>

RUN apt-get update  
RUN apt-get upgrade -y
RUN apt-get install -y vim
RUN apt-get install -y curl
RUN apt-get install -y wget
RUN apt-get install -y nodejs 
RUN apt-get install -y npm 
RUN npm install -g npm
RUN npm install @angular/cli@latest
RUN apt-get install ansible -y
RUN mkdir /config/
ADD . /app
WORKDIR /app
EXPOSE 4200
ENTRYPOINT ["ansible-playbook"]
CMD ["shoppers/start.yml"]
