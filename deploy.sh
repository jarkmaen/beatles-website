#!/bin/bash

set -e

echo "Fetching latest changes from Git..."
git pull

echo "Building new image and bringing services up..."
docker compose up --build -d

echo "Deployment successful."
