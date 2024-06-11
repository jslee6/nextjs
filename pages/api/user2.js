import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function select(req, res) {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true
    }
  });
  res.status(200).json(users);
  console.log(users);
  
}

//제일간단한 get

// (pages/api/list.js)

// import { connectDB } from "@/util/database"

// export default async function handler(요청, 응답){
//   const db = (await connectDB).db("forum")
//   let result = await db.collection('post').find().toArray()
//   응답.status(200).json(result)
// } 비교용 GET 몽고DB기준