import { Button, TextField, Stack, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Login() {
  return (
    <Grid container>
      {/* **********************왼쪽 그리드**************************** */}
      <Grid item xs={8}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            bgcolor: "#f7f8f8",
            boxShadow: 3,
          }}
        >
          <img src="/main.jpg" alt="Logo" style={{ width: '90%', height: '80%', padding: '40px' }} />
        </Box>
      </Grid>

      {/* **********************오른쪽 그리드**************************** */}
      <Grid item xs={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {/* 회원가입 폼 */}
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

          {/* 로그인 폼 */}
          <Box
            component="form"
            method="POST"
            action="/api/login/login" // 로그인 API 경로
            sx={{
              width: 350, // 폼 너비를 줄임
              p: 3, // 패딩 조정
              border: "1px solid #ccc",
              borderRadius: 2,
              boxShadow: 3,
              mt: 2, // 회원가입 폼과 간격을 두기 위함
            }}
          >
            {/* <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
              로그인
            </Typography> */}
            <Stack spacing={2}> {/* 입력 필드 간격 조정 */}
              <TextField name="userId" type="text" label="아이디" variant="outlined" />
              <TextField name="password" type="password" label="비밀번호" variant="outlined" />
              <Button type="submit" variant="contained" sx={{ fontSize: "20px" }}> {/* 버튼 크기 조정 */}
                로그인
              </Button>
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
