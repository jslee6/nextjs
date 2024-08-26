import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { userId } = req.query;

  try {
    const images = await prisma.imgTest1.findMany({
      where: { userId: parseInt(userId) },
    });
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: '이미지 조회에 실패했습니다.' });
  }
}
