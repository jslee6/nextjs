// // pages/api/account.js
import { Password } from '@mui/icons-material';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function select2(req, res) {
  if (req.method === 'GET') {
    const users = await prisma.softWare.findMany();
    res.json(users);
    //get

  }else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}


// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     const users = await prisma.user.findMany();
//     res.json(users);
//     //get

//   } else if (req.method === 'POST') {
//     const { name } = req.body;
//     const newuser = await prisma.user.create({
//       data: { name }
//     });
//     res.status(201).json(newuser);
//   }
// }

