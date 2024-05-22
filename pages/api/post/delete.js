import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]"
import { getServerSession } from "next-auth";

export default async function handler(요청, 응답){
  if (요청.method == 'DELETE'){
    console.log(요청.body)
    let session = await getServerSession(요청, 응답, authOptions)

    const db = (await connectDB).db('forum') // 기존값을 가져오므로 const
    let 찾은거 = await db.collection('post').findOne({ _id : new ObjectId(요청.body) })

    if (찾은거.author == session.user.email) {
      let result = await db.collection('post').deleteOne({ _id : new ObjectId(요청.body) })
      return 응답.status(200).json('삭제완료')
    } else {
      return 응답.status(500).json('현재유저와 작성자 불일치')
    }

  }
}

// const  값으로 가져와서 변수에 담고, 찾은거랑 세션 값이랑 같으면 삭제-
// 로그아웃되어잇을떄도 삭제완료로 뜨긴하는데 삭제 안됨