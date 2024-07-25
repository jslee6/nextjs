import { Button, TextField, Stack, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Login() {
  return (

    // **********************왼쪽 그리드****************************
    <Grid container >
      <Grid item xs={8} >
        <Box
          sx={{
            display: "flex",
            // flexDirection: "column", 수직으로 바꿔줌 
            justifyContent: "center", // 수평을 가운데 정렬
            // alignItems: "center",  //수직을 가운데 정렬
            height: "100vh",
            bgcolor: "#f7f8f8",
            boxShadow: 3,
            //박스 테두리 그림자
            // 요소의 높이를 브라우저 창의 높이와 동일하게 설정합니다. vh는 viewport height의 약자로, 1vh는 현재 브라우저 창의 1% 높이입니다.
          }}
        >
          {/* 왼쪽 그리드의 내용 */}
          {/* <Typography variant="h4" gutterBottom>
            환영 합니다.
          </Typography> */}
          {/* 멘트 추가 하고싶으면 */}
          <img src="/main.jpg" alt="Logo" style={{ width: '90%', height: '80%', padding: '40px' }} />
        </Box>
      </Grid>
      {/* 왼쪽 그리드 */}
      {/* **********************오른쪽 그리드**************************** */}

      <Grid item xs={4}>
        <Box
          action="/api/account/post"
          method="POST"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box
            component="form"
            method="POST"
            action="/api/account/post"
            sx={{
              width: 400,
              p: 4,
              border: "1px solid #ccc",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
              회원가입
            </Typography>
            {/* gutterBottom 스타일 */}
            <Stack spacing={3}>
              <TextField name="userId" type="text" label="아이디" variant="outlined" />
              <TextField name="email" type="email" label="이메일" variant="outlined" />
              <TextField name="password" type="password" label="비밀번호" variant="outlined" />
              
              {/* 숨겨진 입력 필드 추가 */}
              <input type="hidden" name="role" value="user" />

              <Button type="submit" variant="contained" sx={{ fontSize: "30px" }}>
                가입하기
              </Button>
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
{/* 오른쪽 그리드 */ }
