import React from "react";
import { useAuth } from "../contexts/auth.context";

function PageA() {
  const auth = useAuth();

  return (
    <div>
      <span>PageA</span> | <span>로그인 여부 {auth.isLoggedIn.toString()}</span>
    </div>
  );
}

export default PageA;
