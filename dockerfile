FROM node:22-alpine AS builder
WORKDIR /app
# COPY pnpm-lock.yaml package.json ./
COPY . .
# RUN npm install -g pnpm 
RUN npm install
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

RUN apk add --no-cache tzdata
ENV TZ=Asia/Bangkok
ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "build"]