// //app/login/page.js
// import { Button, Input, Stack } from "@mui/material";



// export default function Login() {
//   return (
//     <div className="p-20">
//         <form method="POST" action="/api/auth/signup">
//        <Stack direction="row" spacing={4}>  // row 설정시 수평
//           <div>
//           <Input name="name" type="text" placeholder="이름" /> 
//           <br/>
//           <Input name="email" type="text" placeholder="이메일" />
//           <br/>
//           <Input name="password" type="password" placeholder="비번" />
//           <br/>
//           <Button type="submit">ID/PW 가입요청</Button>
//           </div>
//           </Stack>
//         </form>
//     </div>
//   )
// }

//app/pjoin/page.js

// 'useclient'

import { Button, TextField, Stack, Box, Typography } from "@mui/material";

export default function Login() {
  return (
    // <form action="/api/account/post" method="POST">
    // <Box

    <Box action="/api/account/post" method="POST"  // box에도 액션쓸수잇네?

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
        action="/api/auth/signup"
        sx={{
          width: 400,
          p: 4,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          회원가입
        </Typography>
        <Stack spacing={3}>
          <TextField name="userId" type="text" label="아이디" variant="outlined" />
          <TextField name="email" type="email" label="이메일" variant="outlined" />
          <TextField name="password" type="password" label="비밀번호" variant="outlined"/>
          <Button  type="submit" variant="contained" sx={{ fontSize: '30px' }}  >
          
            가입하기
          </Button>
        </Stack>
      </Box>
    </Box>
    // </form>
  );
}




// ///클라이언트 ,  리다이렉트는  api/user/post  에서 추가함