//24.08.08 로그아웃
'use client';
import { useEffect } from 'react';

export default function Logout() {
  useEffect(() => {
    const handleLogout = async () => {
      await fetch('/api/auth/logout', {
        method: 'POST',
      });

      // 로그아웃 후 리다이렉션 (예: 홈 페이지로)
      window.location.href = '/';
    };

    handleLogout();
  }, []);

  return (
    <div>
      <h1>로그아웃 중...</h1>
    </div>
  );
}
