import { connectDB } from "/util/database.js"
import { MongoClient } from "mongodb"


export default async function Home() {

  // await 쓰려면 async 써야함

const client = await connectDB;
const db = client.db('forum');
let result = await db.collection('post').find().toArray();
console.log(result)
// 컬렉션의 모든 document를 가져오세요 .그걸 result 변수에 담음


  return (
   <div>안녕</div>
  )
}
