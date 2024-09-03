// /pages/api/post/account.js
// 해시화 함

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Log the incoming request body
    console.log('Request body:', req.body);

    const { userId, password, email, role } = req.body;

    try {
      // 비밀번호 해시화
      const hashedPassword = await bcrypt.hash(password, 10); // 10은 salt rounds

      // Create a new user in the database
      const newUser = await prisma.account.create({
        data: {
          userId,
          password: hashedPassword, // 해시화된 비밀번호 저장
          email,
          role,
        },
      });

      // 리다이렉트 또는 성공 응답
      res.status(201).json(newUser);  // 성공적인 응답
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user', details: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
