FROM node:18.18.0

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .
COPY package-lock.json .

RUN apt update && apt install -y build-essential
RUN npm install

# Bundle app source
COPY . .

EXPOSE 1650

CMD node corey.js