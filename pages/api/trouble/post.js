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


// /pages/api/trouble/post.js
// 기존 date 타입과 datetime 타입 땜에 안됨

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     // Log the incoming request body
//     console.log('Request body:', req.body);

//     try {
//       // Create a new user in the database
//       const trouble = await prisma.troubleshooting.create({
//         data: req.body, // 요청 본문을 그대로 사용
//       });

//       //user? 를 ->   trouble

//       // 리다이렉트 또는 성공 응답
//       res.status(201).json(trouble);  // 성공적인 응답
//     } catch (error) {
//       console.error('Error creating user:', error);
//       res.status(500).json({ error: 'Failed to create 트러블슈팅', details: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }



import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Log the incoming request body
    console.log('Request body:', req.body);
    const context = { ...req.body, resolvedAt: new Date(req.body.resolvedAt) }
    try {
      // Create a new user in the database
      const trouble = await prisma.troubleshooting.create({
        data: context, // 요청 본문을 그대로 사용
      });

      //user? 를 ->   trouble

      // 리다이렉트 또는 성공 응답
      res.status(201).json(trouble);  // 성공적인 응답
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create 트러블슈팅', details: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
