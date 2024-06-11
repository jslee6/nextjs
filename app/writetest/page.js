{/* 폼테그 쓰는게 겟,포스트 제일쓰기 쉬움**** */}
// 풋과 딜리트는 안됨



export default function Write() {
  return (
    <div className="p-20">
      <form action="/api/post/user" method="POST">
        <input type="email" name="email" placeholder="이메일" required />
        <input type="text" name="firstName" placeholder="이름" required />
        <input type="text" name="lastName" placeholder="성" required />
        <input type="text" name="address" placeholder="주소" required />
        <input type="number" name="age" placeholder="나이" />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}





// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function post(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     const { email, name } = req.body;

//     try {
//         const newUser = await prisma.user.create({
//             data: {
//                 email,
//                 name
//             }
//         });

//         return res.status(201).json(newUser);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// 

