import React from "react";
import { useAuth } from "../contexts/auth.context";

function PageC() {
  const auth = useAuth();

  return (
    <div>
      <span>PageC</span> | <span>로그인 여부 {auth.isLoggedIn.toString()}</span>
    </div>
  );
}

export default PageC;
