// export default function handler(){
//   if (req.method == 'POST') {
//     console.log(req.body)
//   }
// }

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, firstName, lastName, address, age } = req.body;

    try {
      // Create a new user in the database
      const newUser = await prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          address,
          age: age ? parseInt(age, 10) : null, // age가 제공된 경우에만 정수로 변환
        },
      });
      res.status(200).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}


