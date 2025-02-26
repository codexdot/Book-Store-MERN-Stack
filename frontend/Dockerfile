# Dockerfile for frontend 

# Base Image
FROM node:16

# Metadata
LABEL maintainer="yes20sh@outlook.com"
LABEL version="1.0"
LABEL author="Yashraj Singh Solanki"
LABEL description="Dockerfile for the frontend of the book store MERN stack application"

# Setting working directory
WORKDIR /app 

# Copy the package.json and package-lock.json (if available) and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copying the rest of the application code
COPY . .

# Expose the Port
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev", "--", "--host"]