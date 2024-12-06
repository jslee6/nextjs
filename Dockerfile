# # 베이스 이미지
# FROM node:20

# # 작업 디렉토리 설정
# WORKDIR /usr/src/app

# # 패키지 파일 복사
# COPY package*.json ./

# # Prisma 스키마 파일 복사, prisma 폴더 -> 복사폴더의 루트/prisma로
# COPY prisma ./prisma/

# # 의존성 설치
# RUN npm install


# # Prisma 클라이언트 생성
# RUN npx prisma generate

# # 소스 파일 전체복사 
# COPY . .

# # 빌드 실행
# RUN npm run build

# # 실행 명령
# CMD ["npm", "start"]


# 베이스 이미지
FROM node:20

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 패키지 파일 복사
COPY package*.json ./

# Prisma 스키마 파일 복사
COPY prisma ./prisma/

# 의존성 설치
RUN npm install

# Prisma 클라이언트 생성
RUN npx prisma generate

# 소스 파일 전체 복사
COPY . .

# 환경 변수 설정
ENV NEXTAUTH_SECRET=git6579!!

# 빌드 실행
RUN npm run build

# 실행 명령
CMD ["npm", "start"]
