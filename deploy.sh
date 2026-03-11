#!/bin/bash

set -e

echo "Fetching latest changes from Git..."
git pull

echo "Cleaning unused Docker resources..."
sudo docker system prune -f

echo "Building new image and bringing services up..."
sudo docker compose up --build --remove-orphans -d

echo "Deployment successful."
