import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js"

export default async function Detail(props) {
  let db = (await connectDB).db('forum')
  let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});
  console.log(props.params.id)

  return (

    <div>
      <h4>상세페이지임</h4>
      <h4>타이틀: {result.title}</h4>
      <h4>콘텐트: {result.content}</h4>
      <h4>테스트: {result.test}</h4>
      <h4>테스트2: {result.test2}</h4>

    </div>
    
  )
}
