import React from "react";
import { Link, Outlet } from "react-router";
import { useAuth } from "../contexts/auth.context";

function Layout() {
  const auth = useAuth();

  return (
    <div>
      <header className="header">
        <button onClick={auth.toggleLogIn}>로그인 토글</button>
        <span>로그인 여부 {auth.isLoggedIn.toString()}</span>
      </header>

      <nav>
        <Link to={"/a"}>a</Link> | <Link to={"/b"}>b</Link> |{" "}
        <Link to={"/c"}>c</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
