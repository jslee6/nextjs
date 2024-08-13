//현재 미사용 24.08.03 암호화추가 +세션없음

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, password } = req.body;

    // userId와 비밀번호가 제공되었는지 확인
    if (!userId || !password) {
      return res.status(400).json({ message: '사용자 ID와 비밀번호를 입력해야 합니다.' });
    }

    try {
      // userId로 사용자 찾기
      const user = await prisma.account.findUnique({
        where: { userId },
      });

      // user가 존재하는지 확인하고 비밀번호 비교
      if (user && user.password && await bcrypt.compare(password, user.password)) {
        // 로그인 성공
        res.status(200).json({ message: '로그인 성공' });
      } else {
        // 로그인 실패
        res.status(401).json({ message: '잘못된 사용자 ID나 비밀번호' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: '서버 오류' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
