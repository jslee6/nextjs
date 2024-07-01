'use client'

// 풋과 딜리트는 안됨
import { Button, Input, Stack } from "@mui/material";

export default function Write() {
  
  return (
    <div className="p-20">
      <form action="/api/user/post" method="POST">
        <Stack direction="row" spacing={2}>
          <div>
            <Input type="text" name="firstName" placeholder="이름" required />
            <br></br>
            <Input type="text" name="lastName" placeholder="성" />
          </div>
          <div>
            <Input type="text" name="email" placeholder="이메일" required />
            <br></br>
            <Input type="text" name="address" placeholder="주소" />
          </div>
          <div>
            <Input type="number" name="age" placeholder="나이" />
            <br></br>
          </div>
          <Button variant="contained" color="success" type="submit">전송<br></br>하기</Button>
          
        </Stack>
      </form>
    </div>
  );
}

// 인풋 태그



///클라이언트 ,  리다이렉트는  api/user/post  에서 추가함