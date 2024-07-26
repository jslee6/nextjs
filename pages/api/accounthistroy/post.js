// /pages/api/post/account.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Log the incoming request body
    console.log('Request body:', req.body);

    const { userId, password, email, role } = req.body;
    //-> 이게 파싱이구나......


    try {
      // Create a new user in the database
      const newUser = await prisma.account2.create({
        data: {
          //id id는 uuid로 자동생성
          userId,
          password,
          email,
          role,
        },  // id는 uuid 자동생성
      });

      res.redirect('/accounttest');  // 리다이렉트
      

      res.status(200).json(newUser);


    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user', details: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
 

