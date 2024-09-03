//pages/api/software/put.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id, userId, password, email, role } = req.body;

  try {
    const updatedUser = await prisma.softWare.update({
      where: { id },
      data: { userId, password, email, role},
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


