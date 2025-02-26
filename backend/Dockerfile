# Base Image
FROM node:16

# metadata

LABEL maintainer="yes20sh@outloo.com"
LABEL author="Yashraj Singh Solanki"
LABEL version="1.0"
LABEL description="Dockerfile for the backend of the book store MERN stack application"

# setting working directory
WORKDIR /app

# copy package.json and installing the dependancies
COPY package.json package-lock.json  ./
RUN npm install

COPY . .

# Expose port
EXPOSE 3000

# start application 
CMD ["npm","start"]
