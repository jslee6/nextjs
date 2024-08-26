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

///GET ,과 post 한번에 구현
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const users = await prisma.productUpload.findMany();
    res.json(users);
    //get

  } else if (req.method === 'POST') {
    const { name } = req.body;
    const newuser = await prisma.productUpload.create({
      data: { name }
    });
    res.status(201).json(newuser);
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

