'use client'

import { Button, TextField, Stack, Box, Typography } from "@mui/material";
import Alert from '@mui/material/Alert';
import { useState } from 'react';

export default function Acclogin() {
    const [errorMessage, setErrorMessage] = useState(''); // 오류 메시지 상태 추가

    const handleSubmit = async (event) => {
        event.preventDefault(); // 기본 폼 제출 방지
        const formData = new FormData(event.currentTarget);
        const userId = formData.get('userId');
        const password = formData.get('password');

        try {
            const response = await fetch('/api/login/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                setErrorMessage(data.error || '로그인 실패'); // 오류 메시지 업데이트
            } else {
                const data = await response.json();
                console.log(data.message); // 성공 메시지 출력
                // 성공 시 다른 동작을 수행할 수 있습니다 (예: 리다이렉트)
            }
        } catch (error) {
            setErrorMessage('서버 오류: 로그인 요청을 처리할 수 없습니다.');
        }
    };

    return (
        <Box
            component="form"
            method="POST"
            onSubmit={handleSubmit} // handleSubmit 함수 연결
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
                    <Typography component="span" sx={{ fontSize: '25px', color: "#009899" }}>
                        Holdings
                    </Typography>
                </Typography>

                <Box sx={{ height: '2px' }} />

                {errorMessage && (
                    <Alert severity="error">{errorMessage}</Alert> // 오류 메시지 표시
                )}

                <TextField name="userId" type="text" label="아이디" variant="outlined" />
                <TextField name="password" type="password" label="비밀번호" variant="outlined" />
                <Button type="submit" variant="contained"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: "20px", backgroundColor: "#009899",
                        '&:hover': {
                            backgroundColor: "#A3D5E5",
                        }
                    }}>
                    로그인
                </Button>
            </Stack>
        </Box>
    );
}
