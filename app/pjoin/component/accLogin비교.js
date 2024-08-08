
//색상 변경

import { Button, TextField, Stack, Box, Typography } from "@mui/material";
import Alert from '@mui/material/Alert';

export default function Acclogin() {
    return (

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
                <Typography sx={{ fontWeight: 'bold', fontSize: '60px',textAlign: "center", color: "#009899" }} >
                    IDIS
                    <Typography sx={{ display: 'inline', fontSize: '25px', color: "#009899" }}>
                        Holdings
                    </Typography>
                    {/* inline 요소 써서 같은줄에 배치 */}
                </Typography>


                {/* 공백 추가 */}
                <Box sx={{ height: '2px' }} /> {/* 원하는 높이로 수정 */}

                <Box
                    sx={{
                        backgroundColor: "#BCE9F1", // 배경 색상
                        borderRadius: 10,
                        textAlign: 'left', // 가운데 정렬
                    }}
                >
                    <>
                        <Alert severity="info"> <Typography sx={{ fontWeight: 'bold' }} variant="h7">
                            로그인 후 사용 하세요
                        </Typography></Alert>
                    </>
                </Box>
                <TextField name="userId" type="text" label="아이디" variant="outlined" />
                <TextField name="password" type="password" label="비밀번호" variant="outlined" />
                <Button type="submit" variant="contained"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: "20px", backgroundColor: "#009899",
                        '&:hover': {
                            backgroundColor: "#A3D5E5",
                        }
                    }}> {/* 버튼 크기 조정 */}
                    로그인
                </Button>
            </Stack>
        </Box>
    )
}

//로그인까지 잘됨