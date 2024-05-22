// 서버컴포턴트 라서 DB입출력 넣어도됨



import { connectDB } from "@/util/database.js"
import Link from "next/link";
import DetailLink from "./DetailLink";
import ListItem from "./listitem";


export const dynamic = 'force-dynamic'

// export const dynamic = 'force-static'
// 랜더링 전략.  다이나믹이 아니면 데이터 변경안됨

export default async function List() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result)

// let db, result 가져가면 DB 출력가능

  console.log(result[0])

  return (
    <div className="list-bg">
      <ListItem result={result}></ListItem>
      {/* 프롭스 , 작명 ={전송할 데이터} */}
      {/* props 가져옴 */}
      {/* 리스트 item 컴포넌트 가져옴 */}
        

    </div>
  )
}