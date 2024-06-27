'use client'

{/* 폼테그 쓰는게 겟,포스트 제일쓰기 쉬움**** */ }
// 풋과 딜리트는 안됨

//div를 쓰긴해야하네

import { Button, Input, Stack } from "@mui/material";

export default function Write() {
  return (
    <div className="p-20">
      <form action="/api/user/post" method="POST">
        <Stack direction="row" spacing={2}>
          <Input type="text" name="email" placeholder="이메일" required />
          <Input type="text" name="firstName" placeholder="이름" required />
          <Input type="text" name="lastName" placeholder="성" />
          <Input type="text" name="address" placeholder="주소" />
          <Input type="number" name="age" placeholder="나이" />
          <Button type="submit">전송</Button>
        </Stack>
      </form>
    </div>
  );
}

// 인풋 태그

// export default function Write() {
//   return (


// <div className="p-20">
//       <form action="/api/user/post" method="POST">
//         <input type="text" name="email" placeholder="이메일" required />
//         <input type="text" name="firstName" placeholder="이름" required />
//         <input type="text" name="lastName" placeholder="성"  />
//         <input type="text" name="address" placeholder="주소"/>
//         <input type="number" name="age" placeholder="나이" />
//         <button type="submit">전송</button>
//       </form>
//     </div> 
//   );
// }  

// 얘는 됨



///클라이언트 ,  리다이렉트는  api/user/post  에서 추가함