'use client'

// 풋과 딜리트는 안됨
import { Button, Input, Stack, Box, TextField } from "@mui/material";

export default function Enroll() {

  return (
    // <Box sx={{ width: '100%' }}> {/* Box를 사용하여 폭을 100%로 설정 */}
    <Box 
    sx={{backgroundColor: '#f9f7f8' }} // 배경색
  >
      <form action="/api/sw/post" method="POST">
        <Stack direction="row" spacing={1}>
          <div>
            <Input type="text" name="docsNumber" placeholder="문서번호" />
            <br />
            <Input type="text" name="SwName" placeholder="SW명" />
          </div>

          <div>
            <Input type="text" name="Department" placeholder="부서" />
            <br />
            <Input type="text" name="period" placeholder="기간여부" />
          </div>

          <div>
            <Input type="text" name="SwuserID" placeholder="유저ID" />
            <br />
            <Input type="text" name="licensKey" placeholder="라이센스키" />
          </div>
          <div>
            <Input type="text" name="name" placeholder="이름" required />
            <br />
            <TextField type="text" name="madeCompany" placeholder="제조사" />
          </div>
          <div>
            <TextField 
              name="etc" 
              placeholder="기타사항" 
              multiline   
              rows={1.5} // 높이를 조정할 수 있는 속성
              sx={{ width: '600px' }} // 원하는 너비로 설정 (예: 500px)
            />
          </div>
          
          <Button className="button-blue" variant="contained" color="info" type="submit">전송<br></br>하기</Button>
          {/* <Button className="button-red" variant="contained" color="info" type="submit">전송<br></br>완료</Button> */}
        </Stack>
      </form>
    </Box>
  );
}
