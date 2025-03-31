import { createContext, useContext, useState } from "react";

// 1. 만든다
const AuthContext = createContext();

// 2. 사용한다
export const useAuth = () => useContext(AuthContext);

// 3. 범위를 지정해서 값을 내려준다.
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogIn = () => setIsLoggedIn((prev) => !prev);

  // 뭘 내려줄 것인가?
  // 1. 로그인 여부
  // 2. 로그인 여부를 바꾸는 함수
  const value = { isLoggedIn, toggleLogIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
