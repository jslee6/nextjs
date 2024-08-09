'use client'

import { useState } from 'react';
import { Button, TextField, Stack, Box, Typography, Alert } from "@mui/material";

export default function Acclogin() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear any previous errors

    const response = await fetch('/api/login/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, password }),
    });

    if (response.ok) {
      window.location.href = '/';
    } else {
      setError('ID/PW 확인이 필요합니다.');
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
          <Typography component="span" sx={{ fontSize: '25px', color: "#009899" }}>
            Holdings
          </Typography>
        </Typography>

        <Box sx={{ height: '2px' }} />

        {error && (
          <Alert severity="error">
            <Typography sx={{ fontWeight: 'bold' }} variant="h7">
              {error}
            </Typography>
          </Alert>
        )}

        <Box
          sx={{
            backgroundColor: "#BCE9F1",
            borderRadius: 10,
            textAlign: 'left',
          }}
        >
          <Alert severity="info">
            <Typography sx={{ fontWeight: 'bold' }} variant="h7">
              로그인 후 사용 하세요
            </Typography>
          </Alert>
        </Box>
        <TextField name="userId" type="text" label="아이디" variant="outlined" value={userId} onChange={(e) => setUserId(e.target.value)}/>
        <TextField name="password" type="password" label="비밀번호" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/>
        
        <Button type="submit"variant="contained"
          sx={{
            fontWeight: 'bold',
            fontSize: "20px",
            backgroundColor: "#009899",
            '&:hover': {
              backgroundColor: "#A3D5E5",
            },
          }}
        >
          로그인
        </Button>
      </Stack>
    </Box>
  );
}


