//pages/api/auth/signup.js

import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";// 계정 암호화 라이브러리

export default async function handler(요청, 응답) {
  if (요청.method === "POST") {

      const hash = await bcrypt.hash(요청.body.password, 10);
      // 암호화 방식
    //   요청.body.password = hash; 
      요청.body.password = hash; 
      //해쉬 보면 암호화해서 나옴
    //   console.log(hash)
      console.log(요청.body)
      

      let db = (await connectDB).db('forum');
      await db.collection('user_cred').insertOne(요청.body);
      응답.status(200).json('성공');

  }
}; 