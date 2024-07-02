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
    <Box
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
          <TextField name="name" type="text" label="이름" variant="outlined" />
          <TextField name="email" type="email" label="이메일" variant="outlined" />
          <TextField name="password" type="password" label="비밀번호" variant="outlined"/>
          <Button type="submit" variant="contained" sx={{ fontSize: '30px' }}  >
            가입하기
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
