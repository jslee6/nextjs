// pages/api/user.js
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function select(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const users = await prisma.user.findMany({
//         select: {
//           id: true,
//           address: true,
//           age: true,
//           email: true,
//           firstName: true,
//           lastName: true,
//           updatedAt: true,
//           createdAt: true,
//         }
//       });
//       res.status(200).json(users);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }


import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.json(users);
    //get

  } else if (req.method === 'POST') {
    const {  } = req.body;
    const newuser = await prisma.user.create({
      data: {
        ...req.body, //전체 객체를 spread 연산자로 가져옴
        age: age ? parseInt(age, 10) : null, // 10 진수
      },  // id는 uuid 자동생성
    });

    res.status(201).json(newuser);
  }
  else {
        res.status(405).json({ error: '에러' });
  }
}





// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const users = await prisma.user.findMany();
//       res.status(200).json(users);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// } 기본 Select

