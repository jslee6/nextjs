// pages/api/users/[id].js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PATCH') {
    try {
      const { firstName, lastName, email, age, address } = req.body;

      // 사용자 정보 업데이트
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: { firstName, lastName, email, age, address },
      });

      res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: '사용자 정보 수정 중 오류가 발생했습니다.' });
    }
  } else {
    res.status(405).json({ error: '허용되지 않은 HTTP 메서드입니다.' });
  }
}
