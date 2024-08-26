// // pages/api/user/delete.js

// import { PrismaClient } from '@prisma/client';
// import { getToken } from 'next-auth/jwt'; // JWT 토큰을 가져오기 위한 import

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === 'DELETE') {

//     // **jwt 토큰 가져와서 확인함**
//     const token = await getToken({ req, secret: 'git6579!!' }); // JWT 토큰 가져오기

//     // 토큰이 없거나 role이 admin이 아닌 경우
//     if (!token || token.user.role !== 'admin') {
//       return res.status(403).json({ redirect: '/roleDeny' }); // 권한 없음 응답
//     }

//     // **jwt 토큰 가져와서 확인함**

//     const { id } = req.body; // 사용자 ID를 'id'로 받습니다.

//     try {
//       await prisma.user.delete({
//         where: {
//           id: id // 'id'로 삭제 조건을 설정합니다.
//         }
//       });
//       res.status(200).json({ message: '사용자가 삭제되었습니다.' });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.status(405).json({ error: '허용되지 않는 HTTP 메서드입니다.' });
//   }
// }


//****

// pages/api/user/delete.js

import { PrismaClient } from '@prisma/client';
import { getToken } from 'next-auth/jwt'; /// 서버에서 토큰 내역을 확인하여 처리

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'DELETE') {

    //** 토큰  에서 권한 비교 */

    const token = await getToken({ req, secret: 'git6579!!' });

    // 토큰이 없거나 role이 admin이 아닌 경우
    if (!token || token.user.role !== 'admin') {
      return res.status(403).json({ redirect: '/roleDeny' }); // 권한 없음 응답  redirect 를 페이지에 전달해줌  ,리다이렉트를 여러번쓰려면  redirect 에 담아주는게 좋음
      // return res.status(403).json({ error: '권한이 없습니다.' });  //권한 없음 응답 ,
    }
    //** 토큰  에서 권한 비교 */

    const { id } = req.body // 사용자 ID를 'id'로 받습니다.

    try {
      await prisma.productUpload.delete({
        where: { 
          id: id // 'id'로 삭제 조건을 설정합니다.
        }
      });
      res.status(200).json({ message: '사용자가 삭제되었습니다.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: '허용되지 않는 HTTP 메서드입니다.' });
  }
}

