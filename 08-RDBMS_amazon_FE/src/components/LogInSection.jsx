import React, { useState } from "react";
import api from "../api/index.api";

function LogInSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password };
    const result = await api.users.logIn(data);

    console.log(result);
  };

  return (
    <section>
      <h2>로그인하기</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="이메일을 입력해 주세요"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="비밀번호를 입력해 주세요"
        />
        <button>로그인하기</button>
      </form>
      <hr />
    </section>
  );
}

export default LogInSection;
