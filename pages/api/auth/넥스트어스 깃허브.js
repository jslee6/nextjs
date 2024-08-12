// next auth 공식 가이드

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectDB } from "@/util/database";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';


export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23lilbmCYDR7pB5EEw',
      clientSecret: '996656543eabc536d5f0f50067379d513b3d20a3',
    }),

    //여기추가
    CredentialsProvider({
      //1. 로그인페이지 폼 자동생성해주는 코드 
      name: "credentials",
        credentials: {
          email: { label: "email", type: "text" },
          password: { label: "password", type: "password" },
      },

      //2. 로그인요청시 실행되는코드
      //직접 DB에서 아이디,비번 비교하고 *********************
      //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
      async authorize(credentials) {
        let db = (await connectDB).db('forum');
        let user = await db.collection('user_cred').findOne({email : credentials.email})
        // 이메일비교
        if (!user) {
          console.log('해당 이메일은 없음');
          return null
        }

        //비번비교
        const pwcheck = await bcrypt.compare(credentials.password, user.password);
        if (!pwcheck) {
          console.log('비번틀림');
          return null
        }
        return user
      }
    })
    //여기 추가

  ],

   //3. jwt 써놔야 잘됩니다 + jwt 만료일설정 (세션은 설명안해줌)
   session: {
    strategy: 'jwt',
    maxAge:   4 *60 * 60 //4시간
  },


  callbacks: {
    //4. jwt 만들 때 실행되는 코드 
    //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.name = user.name
        token.user.email = user.email
      }
      return token;
    },
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user;  
      return session;
    },
  },


  // 깃허브 프로바이더 이고 구글하고싶으면 구글로하면 됨
  secret : 'git6579!!',
  adapter : MongoDBAdapter(connectDB) //추가함
}
export default NextAuth(authOptions); 