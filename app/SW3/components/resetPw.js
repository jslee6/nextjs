import { useState } from 'react';
import { Button, TextField, Stack } from '@mui/material';


const ResetPassword = () => {
  const [userId, setUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await fetch('/api/auth/ResetPw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, newPassword }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message); // 성공 메시지
      } else {
        setMessage(data.error); // 오류 메시지
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('서버에 오류가 발생했습니다.');
    }
  };

  return (
    <>
      {/* <h2>비밀번호 초기화 페이지</h2> */}
      <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
        <TextField
          type="text"
          variant="outlined"
          label="ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <TextField
          type="password"
          label="신규암호"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button
          sx={{ width: '50px' }}
          variant="contained"
          color="error" onClick={handleResetPassword}>암호리셋</Button>
        {message && <p>{message}</p>} {/* 메시지 표시 */}
      </Stack>
    </>

  );
};

export default ResetPassword;
