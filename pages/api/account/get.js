// pages/api/account.js
import { Password } from '@mui/icons-material';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function select2(req, res) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.account.findMany({
        select: {
          id: true,
          userId: true,
          password: true,
          email: true,
          role: true,
          createdAt: true,

        }
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}



