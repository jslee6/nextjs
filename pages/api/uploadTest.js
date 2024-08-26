import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, url } = req.body;

    try {
      const image = await prisma.imgTest1.create({
        data: {
          url,
          userId,
        },
      });
      res.status(201).json(image);
    } catch (error) {
      res.status(500).json({ error: '이미지 업로드에 실패했습니다.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
