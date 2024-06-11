// /pages/api/post/user.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Log the incoming request body
    console.log('Request body:', req.body);

    const { email, firstName, lastName, address, age } = req.body;
    //-> 이게 파싱이구나......

  
    try {
      // Create a new user in the database
      const newUser = await prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          address,
          age: age ? parseInt(age, 10) : null, // Convert age to integer if provided
        },
      });
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