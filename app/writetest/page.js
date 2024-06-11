{/* 폼테그 쓰는게 겟,포스트 제일쓰기 쉬움**** */}
// 풋과 딜리트는 안됨


export default function Write() {
  return (
    <div className="p-20">
      <form action="/api/post/user" method="POST">
        <input type="text" name="email" placeholder="이메일" required />
        <input type="text" name="firstName" placeholder="이름" required />
        <input type="text" name="lastName" placeholder="성"  />
        <input type="text" name="address" placeholder="주소"/>
        <input type="number" name="age" placeholder="나이" />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}


///클라이언트 , 다하고 리다이렉트 추가하면 좋을듯~