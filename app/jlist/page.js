
// 서버컴포턴트 라서 DB입출력 넣어도됨


import { connectDB } from "@/util/database.js"
import Link from "next/link";
import DetailLink from "./DetailLink";
export const dynamic = 'force-dynamic'


export default async function List() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('join').find().toArray();
  console.log(result)

// let db, result 가져가면 DB 출력가능

  console.log(result[0])

  return (
    <div className="list-bg">
        {
            result.map((a,i)=>{
                return(
                    <div className="list-item" key={i}>
                        {/* <h4>{result[i].title}</h4> */}
                    
                    <Link href={'/jdetail/'+ result[i]._id}>
                      <h4>{a.title}</h4>
                      </Link>
                      <p>{a.content}</p>
                    {/* D 라우팅 링크 세부주소+ 결과값의 아이디값+ <H4<'배열의 타이틀값 가지고옴' </H4> */}
                    {/* <DetailLink></DetailLink> */}
                    
                    {/* <p>1월 1일</p> */}
                  </div>
                )                       
            })
        }

    </div>
  )
}