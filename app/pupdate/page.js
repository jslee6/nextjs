export default function Write() {
    return (
      <div className="p-20">
        <form action="/api/update/user" method="PUT">
          <input type="text" name="id" placeholder="ID" required />
          <input type="text" name="email" placeholder="이메일" required />
          <input type="text" name="firstName" placeholder="이름" required />
          <input type="text" name="lastName" placeholder="성" />
          <input type="text" name="address" placeholder="주소" />
          <input type="number" name="age" placeholder="나이" />
          <button type="submit">전송</button>
        </form>
      </div>
    );
  }
  
  //안됨 삭제예정