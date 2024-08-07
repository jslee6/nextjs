//24.08.07 3 로그인 api api  , loginTest/login

import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

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

      // 세션 생성 (여기서는 간단히 쿠키에 사용자 ID를 저장)
      res.setHeader('Set-Cookie', `sessionID=${account.userId}; HttpOnly; Path=/; Max-Age=3600`);
      res.status(200).json({ message: '로그인 성공' });
    } catch (error) {
      res.status(500).json({ error: '로그인 실패', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


// 1. bcrypt.compare
// 출처: bcrypt 라이브러리.
// 역할: 사용자가 입력한 비밀번호와 데이터베이스에 저장된 해시된 비밀번호를 비교합니다. 비밀번호가 일치하면 true, 그렇지 않으면 false를 반환합니다.

// 2. res.status
// 출처: Express.js와 같은 Node.js 서버 프레임워크의 응답 객체(res)에서 제공하는 메서드.
// 역할: HTTP 응답의 상태 코드를 설정합니다. 예를 들어, res.status(401)은 클라이언트에게 "인증 실패"를 나타내는 401 상태 코드를 반환합니다.

// 3. res.setHeader
// 출처: Express.js와 같은 Node.js 서버 프레임워크의 응답 객체(res)에서 제공하는 메서드.
// 역할: HTTP 응답 헤더를 설정합니다. 예를 들어, res.setHeader('Set-Cookie', ...)는 쿠키를 설정하는 헤더를 추가합니다.