// pages/api/software/put.js

import { PrismaClient } from '@prisma/client'; // PrismaClient를 임포트하여 DB와 연결

const prisma = new PrismaClient(); // PrismaClient 인스턴스 생성

// API 핸들러 정의
export default async function handler(req, res) {
  // PUT 메소드가 아닌 경우 405 상태 코드와 메시지 반환
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // 요청 본문에서 필요한 데이터 추출
  const { id, ...data } = req.body; // id를 추출하고 나머지 데이터는 data 객체에 저장

  try {
    // Prisma를 사용하여 데이터베이스의 소프트웨어 정보를 업데이트
    const updatedUser = await prisma.software.update({
      where: { id }, // 업데이트할 사용자 ID 지정
      data, // 나머지 데이터 전체를 업데이트
    });

    res.status(200).json(updatedUser); // 업데이트 성공 시 응답
  } catch (error) {
    console.error(error); // 에러 로그 출력
    // 500 상태 코드와 메시지 반환
    res.status(500).json({ message: 'Internal server error' });
  }
}
