// /pages/api/post/user.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Log the incoming request body
    console.log('Request body:', req.body);

    const { age } = req.body; // age만 따로 가져옴 [ 특히, age를 req.body에서 가져오지 않아서 undefined가 되어 오류가 발생합니다.]

    try {
      // Create a new user in the database
      const newUser = await prisma.user.create({
        data: {
          ...req.body,
          age: age ? parseInt(age, 10) : null,
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
