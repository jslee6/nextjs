
import { Button, TextField, Stack, Box, Typography } from "@mui/material";


export default function Accjoin(){
    return(
        <>
        <Box
            component="form"
            method="POST"
            action="/api/account/post"
            sx={{
              width: 350, // 폼 너비를 줄임
              p: 3, // 패딩 조정
              border: "1px solid #ccc",
              borderRadius: 2,
              boxShadow: 3,
              mb: 2, // 폼 간격을 위해 margin-bottom 추가
            }}
          >
            {/* <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
              회원가입
            </Typography> */}
            <Stack spacing={2}> {/* 입력 필드 간격 조정 */}
              <TextField name="userId" type="text" label="아이디" variant="outlined" />
              <TextField name="email" type="email" label="이메일" variant="outlined" />
              <TextField name="password" type="password" label="비밀번호" variant="outlined" />
              <input type="hidden" name="role" value="user" />
              <Button type="submit" variant="contained" sx={{ fontSize: "20px" }}> {/* 버튼 크기 조정 */}
                가입하기
              </Button>
            </Stack>
          </Box>
        </>
    )
}