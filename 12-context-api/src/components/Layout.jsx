import React, { useState } from "react";
import { Link, Outlet } from "react-router";

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <header className="header">
        <button onClick={() => setIsLoggedIn((prev) => !prev)}>
          로그인 토글
        </button>
        <span>로그인 여부 {isLoggedIn.toString()}</span>
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
