// 24.08.07 3 , api 라우터 ,회원가입, 로그인 api
///loginTest/signup

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Request body:', req.body);
    const { userId, password, email } = req.body;

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      // 사용자 생성
      const newAccount = await prisma.account.create({
        data: {
          userId,
          password: hashedPassword,
          email,
        },
      });

      res.status(201).json({ message: '회원가입 성공', account: newAccount });
    } catch (error) {
      res.status(400).json({ error: '회원가입 실패', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
