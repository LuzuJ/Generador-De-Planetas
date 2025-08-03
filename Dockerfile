# Etapa 1: Instalar dependencias para no incluirlas en la imagen final
FROM node:22-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Etapa 2: Crear la imagen de producción final y ligera
FROM node:22-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]