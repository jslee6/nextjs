//pages/api/user/put.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id, age, address, email, firstName, lastName } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { age, address, email, firstName, lastName },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

