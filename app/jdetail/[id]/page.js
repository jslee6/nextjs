import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js"

export default async function Detail(props) {
  let db = (await connectDB).db('forum')
  let result = await db.collection('join').findOne({_id : new ObjectId(props.params.id)});
  console.log(props.params.id)

  return (

    <div>
      <h4>{result.title}</h4>
      <h4>{result.content}</h4>
      

    </div>
    
  )
}

