'use client'

// 풋과 딜리트는 안됨
import { Button, Input, Stack } from "@mui/material";

export default function Enroll() {
  
  return (
<div>
      <form action="/api/account/post" method="POST">
        <Stack direction="row" spacing={2}>
          <div>
            <Input type="text" name="userId" placeholder="아이디" required />
            <br></br>
            <Input type="text" name="password" placeholder="암호" />
          </div>
          <div>
            <Input type="text" name="role" placeholder="역활" required />
            <br></br>
            <Input type="email" name="email" placeholder="이메일" />
          </div>
          <Button variant="contained" color="success" type="submit">전송<br></br>하기</Button>      
        </Stack>
      </form>
    </div>
  );
}

// 인풋 태그


