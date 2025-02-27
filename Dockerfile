# Stage 1: Build 단계
FROM node:18-alpine as builder
WORKDIR /app

# OpenSSL 문제 해결을 위한 환경변수 설정
ENV NODE_OPTIONS=--openssl-legacy-provider

# package.json과 package-lock.json 먼저 복사하여 의존성 캐시 활용
COPY package*.json ./
RUN npm install

# 소스 전체 복사
COPY . .

# React 환경변수 빌드 시점에 적용
ARG REACT_APP_KAKAO_JS_KEY
ARG REACT_APP_BACKEND_URL
ARG REACT_APP_KAKAO_REST_API_KEY

ENV REACT_APP_KAKAO_JS_KEY=$REACT_APP_KAKAO_JS_KEY
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
ENV REACT_APP_KAKAO_REST_API_KEY=$REACT_APP_KAKAO_REST_API_KEY

# React 앱을 production build
RUN npm run build

# Stage 2: 실행 단계
FROM node:18-alpine
WORKDIR /app

# OpenSSL 문제 해결을 위한 환경변수 설정
ENV NODE_OPTIONS=--openssl-legacy-provider

# 실행 시점에서도 환경변수를 주입 (필수)
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# 환경변수 주입을 위한 명령어 추가
CMD ["sh", "-c", "export $(grep -v '^#' .env | xargs) && npm start"]
