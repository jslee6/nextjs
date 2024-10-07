// // /pages/api/post/post.js

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     // Log the incoming request body
//     console.log('Request body:', req.body);

//     try {
//       // Create a new user in the database
//       const trouble = await prisma.troubleShooting.create({
//         data: req.body, // 요청 본문을 그대로 사용
//       });

//       // 리다이렉트 또는 성공 응답
//       // res.status(201).json(trouble);  // 성공적인 응답
//     } catch (error) {
//       console.error('Error creating user:', error);
//       res.status(500).json({ error: 'Failed to create SW', details: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }


// // /pages/api/post/post.js
// /pages/api/post/post.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Log the incoming request body
    console.log('Request body:', req.body);

    try {
      // Create a new user in the database
      const trouble = await prisma.troubleShooting.create({
        data: req.body, // 요청 본문을 그대로 사용
      });

      //trouble 를 ->   trouble



      // 리다이렉트 또는 성공 응답
      res.status(201).json(trouble);  // 성공적인 응답
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create SW', details: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
