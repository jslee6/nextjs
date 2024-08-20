import { useState } from 'react';

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
    <div>
      <h2>비밀번호 초기화</h2>
      <input
        type="text"
        placeholder="사용자 ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="password"
        placeholder="새 비밀번호"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>비밀번호 초기화</button>
      {message && <p>{message}</p>} {/* 메시지 표시 */}
    </div>
  );
};

export default ResetPassword;
