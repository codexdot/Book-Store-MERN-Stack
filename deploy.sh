#!/bin/bash

# Update package list and install Docker
sudo apt-get update
sudo apt-get install -y docker.io

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Clone the project repository from GitHub
git clone https://github.com/your-username/Book-Store-MERN-Stack.git

# Navigate to the project directory
cd Book-Store-MERN-Stack

# Build and start the Docker containers using Docker Compose
sudo docker-compose up --build -d

# Print the status of the Docker containers
sudo docker-compose ps