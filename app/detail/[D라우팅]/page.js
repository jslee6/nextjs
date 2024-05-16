import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {

    let db = (await connectDB).db("forum");
    let result = await db.collection('post').find().toarray()
    console.log(props)

    return (
        <div>
        <h4>상세페이지임</h4>
      </div>
    )
  }

  