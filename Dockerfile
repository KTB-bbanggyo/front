# Stage 1: Build 단계
FROM node:18-alpine as builder
WORKDIR /app

# package.json과 package-lock.json 먼저 복사하여 의존성 캐시 활용
COPY package*.json ./
RUN npm install

# 소스 전체 복사
COPY . .

# (필요 시 production build 실행)
# RUN npm run build

# Stage 2: 실행 단계
FROM node:18-alpine
WORKDIR /app

# builder에서 의존성 파일 및 node_modules 복사
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY . .

EXPOSE 3000
CMD ["npm", "start"]