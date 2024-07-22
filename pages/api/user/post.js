// /pages/api/post/user.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Log the incoming request body
    console.log('Request body:', req.body);

    const { } = req.body;
    // const { email,age, UserID } = req.body;  이런식으로 필요한것들만 가져올수도 있음

    // email,firstName,lastName,address, age

    try {
      // Create a new user in the database
      const newUser = await prisma.user.create({
        data: {
          ...req.body, //전체 객체를 spread 연산자로 가져옴
          age: age ? parseInt(age, 10) : null, // 10 진수
        },  // id는 uuid 자동생성
      });

      res.redirect('/ptable');  // 리다이렉트

      res.status(200).json(newUser);


    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user', details: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}


//일단넣긴햇는데 이메일은왜?~