// //24.08.09 세션

import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();
const secretKey = crypto.randomBytes(32); // 256비트 비밀 키

// 세션 ID 암호화 함수
function encryptSessionId(sessionId) {
  const iv = crypto.randomBytes(16); // 초기화 벡터 생성
  const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
  let encrypted = cipher.update(sessionId, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`; // iv와 암호문을 함께 반환
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, password } = req.body;

    try {
      const account = await prisma.account.findUnique({
        where: { userId },
      });

      if (!account || !(await bcrypt.compare(password, account.password))) {
        return res.status(401).json({ error: '로그인 실패: 사용자 ID 또는 비밀번호가 잘못되었습니다.' });
      }

      // 세션 ID 암호화
      const encryptedSessionId = encryptSessionId(account.userId);

      // 쿠키에 암호화된 세션 ID 설정
      res.setHeader('Set-Cookie', `sessionID=${encryptedSessionId}; Path=/; Max-Age=3600`);
      
      res.status(200).json({ message: '로그인 성공' });
    } catch (error) {
      res.status(500).json({ error: '로그인 실패', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

