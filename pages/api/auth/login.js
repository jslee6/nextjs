//24.08.07 3 로그인 api api  , loginTest/login
// 학습용


import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


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
      res.setHeader('Set-Cookie', `sessionID=${account.userId}; HttpOnly, Path=/; Max-Age=3600`);
      // 쿠키에 설정을 전달, 
      // 쿠키이름: sessionID=${account.userId}; , 
      // Path=/; =>웹브라우저 모든경로에서 사용가능, 
      // HttpOnly;  JavaScript에서 이 쿠키에 접근할 수 없도록 합니다. 이는 XSS(교차 사이트 스크립팅) 공격으로부터 쿠키를 보호도움. (잘모르겟음, 뻄)

      // Max-Age=3600` : 쿠키 유효기간 3600초
      
      res.status(200).json({ message: '로그인 성공' });
    } catch (error) {
      res.status(500).json({ error: '로그인 실패', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    // post 만 허용되고 ,나머지 get , delete , put 은  안됨
    res.status(405).end(`Method ${req.method} Not Allowed`);
    // 잘못된 메서드 crud 가 들어오면 낫얼로우드 뜸. ex  )OMethod put Not Allowed
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

//HTTP 헤더는 웹 요청과 응답의 메타데이터를 포함하는 정보입니다. 헤더는 클라이언트와 서버 간의 통신에서 추가적인 정보를 전달하며, 요청이나 응답의 특성을 정의하는 데 사

//헤더의구성
//헤더이름: 헤더값