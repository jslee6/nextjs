// 서버컴포턴트 라서 DB입출력 넣어도됨

import { connectDB } from "@/util/database.js"

export default async function List() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result[0])

  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>{result[0].title}</h4>
        {/* --> 리절트 변수에 어레이자료중 첫버재 자료ㅕ의 .title가져옴 */}
        <p>1월 1일</p>
      </div>
      <div className="list-item">
        <h4>글제목</h4>
        <p>1월 1일</p>
      </div>
      <div className="list-item">
        <h4>글제목</h4>
        <p>1월 1일</p>
      </div>
    </div>
  )
}