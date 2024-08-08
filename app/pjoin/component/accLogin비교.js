//아이디 패스워드 맞는데 로그인이 안됨

'use client'

import { useState } from "react";
import { Button, TextField, Stack, Box, Typography } from "@mui/material";
import Alert from '@mui/material/Alert';

export default function Acclogin() {
    const [errorMessage, setErrorMessage] = useState("");  // 에러 메시지 상태 추가

    const handleSubmit = async (event) => {
        event.preventDefault();  // 폼의 기본 동작을 막음
        const formData = new FormData(event.currentTarget);

        try {
            const response = await fetch('/api/login/login', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                // 로그인 실패 시 에러 메시지 설정
                setErrorMessage("아이디, 비밀번호를 확인 하세요.");
            } else {
                // 로그인 성공 시 리디렉션 등 원하는 작업 수행
                window.location.href = '/dashboard';  // 예: 대시보드로 이동
            }
        } catch (error) {
            // 네트워크 오류 등 예외 처리
            setErrorMessage("서버 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}  // 폼 제출 시 처리할 함수
            sx={{
                width: 350,
                p: 3,
                border: "1px solid #ccc",
                borderRadius: 2,
                boxShadow: 3,
                mt: 2,
            }}
        >
            <Stack spacing={2}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '60px', textAlign: "center", color: "#009899" }}>
                    IDIS
                    <Typography component="span" sx={{ display: 'inline', fontSize: '25px', color: "#009899" }}>
                        Holdings
                    </Typography>
                </Typography>

                <Box sx={{ height: '2px' }} />

                <Box
                    sx={{
                        backgroundColor: "#BCE9F1",
                        borderRadius: 10,
                        textAlign: 'left',
                    }}
                >
                    <Alert severity="info">
                        <Typography sx={{ fontWeight: 'bold',fontSize: '14px' }} >
                            로그인 후 사용 하세요
                        </Typography>
                    </Alert>
                </Box>

                {/* 로그인 실패 메시지 표시 */}
                {errorMessage && (
                    <Alert severity="error">
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}> {/* 글자 크기 조정 */}
                            {errorMessage}
                        </Typography>
                    </Alert>
                )}

                <TextField name="userId" type="text" label="아이디" variant="outlined" />
                <TextField name="password" type="password" label="비밀번호" variant="outlined" />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: "20px",
                        backgroundColor: "#009899",
                        '&:hover': {
                            backgroundColor: "#A3D5E5",
                        }
                    }}
                >
                    로그인
                </Button>
            </Stack>
        </Box>
    );
}
