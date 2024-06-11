

import { connectDB } from "/util/database.js"
import { MongoClient } from "mongodb"




export default async function Home() {

  // await 쓰려면 async 써야함
// 중요!!! DB 입출력코드는 서버컴포넌트에서만 씀

const client = await connectDB;
const db = client.db('forum');
// 위에 두줄을  아래처럼 축약가능

// const db = (await connectDB).client.db('forum');



let result = await db.collection('post').find().toArray();
// console.log(result)
// 컬렉션의 모든 document를 가져오세요 .그걸 result 변수에 담음


  return (
   <div>
      <h1 className="title">Programming log</h1>
      <h2 className="minititle">TEST PAGE</h2>
      <p className="title-sub">by dev JSLEE </p>

     </div>
   
  )
}
