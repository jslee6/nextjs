import { connectDB } from "@/util/database.js"
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == 'POST'){

    if (요청.body.title == '') {
      return 응답.status(500).json('제목공백 안됨')
    }
    
    try{
      let 변경값 = {title : 요청.body.title, content : 요청.body.content}
      let db = (await connectDB).db('forum')
      let result = await db.collection('post').updateOne(
        {_id : new ObjectId(요청.body._id)}, 
        { $set : 변경값} 
      );

      //updateOne 쓰고 요청.바디._id로 받음 
      console.log(result)
  
      응답.redirect(302, '/list')
    }
    catch 
    {
    return 응답.status(500).json('제목써라')
  }
  }
}