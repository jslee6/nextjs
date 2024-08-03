//test page

'use client'

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login/login', {
        

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    alert(data.message);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="이메일" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">로그인</button>
      </form>

      <h1>회원가입</h1>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="이메일" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
