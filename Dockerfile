FROM node:20-alpine AS build-stage

WORKDIR /app/frontend

COPY frontend/package*.json ./

RUN npm install

COPY frontend/src ./src
COPY frontend/index.html ./
COPY frontend/tsconfig*.json ./
COPY frontend/vite.config.ts ./

RUN npm run build


FROM node:20-alpine

WORKDIR /app/backend

COPY backend/package*.json ./

RUN npm install

COPY backend/controllers ./controllers
COPY backend/database ./database
COPY backend/middlewares ./middlewares
COPY backend/models ./models
COPY backend/routes ./routes
COPY backend/utils ./utils
COPY backend/app.ts ./
COPY backend/index.ts ./
COPY backend/tsconfig.json ./

COPY --from=build-stage /app/frontend/dist ./dist

EXPOSE 3000

CMD [ "npx", "tsx", "index.ts" ]
