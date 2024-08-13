//프리즈마 + 로그인 +CredentialsProvider +커스텀페이지 , sign IN

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        userId: { label: "User ID", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Prisma를 사용하여 계정 찾기
        const account = await prisma.account.findUnique({
          where: { userId: credentials.userId } // userId로 계정 검색
        });

        // userId 비교
        if (!account) {
          console.log('해당 User ID는 없음');
          return null;
        }

        // 비밀번호 비교
        const pwcheck = await bcrypt.compare(credentials.password, account.password);
        if (!pwcheck) {
          console.log('비밀번호 틀림');
          return null;
        }

        return account; // 인증 성공 시 계정 반환
      }
    })
  ],

  session: {
    strategy: 'jwt',
    maxAge: 4 * 60 * 60 // 4시간
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.userId = user.userId; // userId를 JWT에 저장
        token.user.role = user.role; // 역할도 저장할 수 있음
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;  
      return session;
    },
  },
// 중요***********///
  pages: {
    signIn: '/auth/login', // 사용자 정의 로그인 페이지 경로****** app라우터 하단
  },

  secret: 'git6579!!', // 비밀 키
  adapter: PrismaAdapter(prisma) // Prisma 어댑터 사용
}
// 중요***********///

export default NextAuth(authOptions);


