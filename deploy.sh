#!/bin/bash

set -e

echo "Fetching latest changes from Git..."
git pull

echo "Building new images..."
sudo docker compose build --pull

echo "Restarting services..."
sudo docker compose up --remove-orphans -d

echo "Cleaning unused Docker resources..."
sudo docker system prune -f

echo "Deployment successful."
