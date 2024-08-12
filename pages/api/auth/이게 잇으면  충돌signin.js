// pages/auth/signin.js
import { signIn } from "next-auth/react";
import { useState } from "react"; // useState를 임포트

const SignIn = () => {
  const [userId, setUserId] = useState(""); // useState 사용
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn("credentials", {
      userId,
      password,
      redirect: false,
    }).then((result) => {
      if (result.error) {
        console.error(result.error);
      } else {
        window.location.href = "/"; // 성공 시 리다이렉트
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User ID</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
};

export default SignIn;
