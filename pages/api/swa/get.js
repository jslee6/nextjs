// // // pages/api/sw/get.js
//기본 get



// import { Password } from '@mui/icons-material';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function select2(req, res) {
//   if (req.method === 'GET') {
//     const users = await prisma.softWare.findMany();
//     res.json(users);
//     //get

//   }else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }

// // // pages/api/sw/get.js
// role 에 따라 컬럼을 ****로 바꾸는 방식으로 함
// 아예 안가져오는 방식+ jwt 에서 롤로 컬럼을 disabled

// import { PrismaClient } from '@prisma/client';
// import { getToken } from 'next-auth/jwt';

// const prisma = new PrismaClient();

// export default async function select2(req, res) {
//   if (req.method === 'GET') {
//     // 미들웨어와 동일한 방식으로 JWT 토큰 가져오기
//     const token = await getToken({ req, secret: 'git6579!!' });

//     if (!token) {
//       return res.status(401).json({ error: '토큰 인증 안됨' });
//     }

//     const userRole = token.user.role;  // role 정보 가져오기

//     // 소프트웨어 테이블에서 데이터 조회
//     const users = await prisma.softWare.findMany();

//     // role이 'admin'이 아닐 경우 licensKey 컬럼 마스킹
//     if (userRole !== 'admin') {
//       users.map(user => {
//         user.licensKey = '******';  // licensKey 값을 마스킹
//       });
//     }

//     res.json(users);
//   } else {
//     res.status(405).json({ error: 'Get만 허용' });
//   }
// }

// // // pages/api/sw/get.js
// role 에 따라 아예 안가져오는 방식+ jwt 에서 롤로 컬럼을 disabled
// 학습필요





// 12.05 원본
// pages/api/sw/get.js



// import { PrismaClient } from '@prisma/client';
// import { getToken } from 'next-auth/jwt';

// const prisma = new PrismaClient();

// export default async function select2(req, res) {
//   if (req.method === 'GET') {
//     // 미들웨어와 동일한 방식으로 JWT 토큰 가져오기
//     const token = await getToken({ req, secret: 'git6579!!' });

//     if (!token) {
//       return res.status(401).json({ error: '토큰 인증 안됨' });
//     }

//     const userRole = token.user.role;  // role 정보 가져오기

//     // 소프트웨어 테이블에서 데이터 조회
//     const users = await prisma.software.findMany();

//     // role에 따라 licenseKey를 제외한 사용자 데이터 생성
//     const response = users.map(user => {
//       if (userRole !== 'admin') {
//         const { licensKey, ...rest } = user; // licensKey 제외
//         return rest; // 나머지 속성만 반환
//         // ...rest 는 앞에껄 뺸 나머지 값을 반환

//       }
//       return user; // admin인 경우 전체 반환
//     });

//     res.json(response);
//   } else {
//     res.status(405).json({ error: 'Get만 허용' });
//   }
// }




//24.12.05 test코드
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function select2(req, res) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.software.findMany({
        select: {
          id: true,
          docsNumber: true,
          SwuserID: true,
          name: true,
          Department: true,
          SwName: true,
          period: true,
          licensKey: true,
          madeCompany: true,
          etc: true,
          createdAt: true,  // 추가
          updatedAt: true,  // 추가
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


