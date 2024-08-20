// /pages/api/auth/ResetPw.js
//암호 초기화 해시화
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, newPassword } = req.body;

    try {
      // 새 비밀번호 해시화
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // 데이터베이스에서 비밀번호 업데이트
      const updatedUser = await prisma.account.update({
        where: { userId },
        data: { password: hashedPassword },
      });

      res.status(200).json({ message: '비밀번호가 성공적으로 초기화되었습니다.', user: updatedUser });
    } catch (error) {
      console.error('Error resetting password:', error);
      res.status(500).json({ error: '비밀번호 초기화에 실패했습니다.', details: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
