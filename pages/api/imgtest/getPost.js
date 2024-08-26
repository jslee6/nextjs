// 요걸로 쓰려고 하는중

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // GET 요청 처리
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }

  // POST 요청 처리
  } else if (req.method === 'POST') {
    console.log('Request body:', req.body);

    const { age } = req.body; // age만 따로 가져옴

    try {
      const newUser = await prisma.user.create({
        data: {
          ...req.body,
          age: age ? parseInt(age, 10) : null, // age 처리
        },
      });

      res.redirect('/ptable'); // 리다이렉트 처리

    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user', details: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}