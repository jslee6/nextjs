
// 서버컴포턴트 라서 DB입출력 넣어도됨



import { connectDB } from "@/util/database.js"
import Link from "next/link";
import DetailLink from "./DetailLink";


export default async function List() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result)

// let db, result 가져가면 DB 출력가능

  console.log(result[0])

  return (
    <div className="list-bg">
        {
            result.map((a,i)=>{
                return(
                    <div className="list-item" key={i}>
                        <h4>{result[i].title}</h4>
                  
                        <Link href={'/detail/' + result[i]._id}>{result[i].title}</Link>
                        <Link href={'/edit/' + result[i]._id} className="list-btn">✏️</Link>
                        
                        
                        <p>{a.content}</p>

                    {/* <DetailLink></DetailLink> */}
                    
                    {/* <p>1월 1일</p> */}
                  </div>
                )                       
            })
        }

    </div>
  )
}