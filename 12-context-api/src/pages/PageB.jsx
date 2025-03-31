import React from "react";
import { useAuth } from "../contexts/auth.context";

function PageB() {
  const auth = useAuth();

  return (
    <div>
      <span>PageB</span> | <span>로그인 여부 {auth.isLoggedIn.toString()}</span>
    </div>
  );
}

export default PageB;
