{/* 폼테그 쓰는게 겟,포스트 제일쓰기 쉬움**** */}
// 풋과 딜리트는 안됨



export default async function Write() {
  return (
    <div className="p-20">
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목"/>
        <input name="content" placeholder="글내용"/>
        <input name="test" placeholder="test필드"/>
        <input name="test2" placeholder="test필드2"/>
        <button type="submit">전송</button>
      </form>

    </div>
  )
} 