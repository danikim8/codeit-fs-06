import React from "react";

function Button({ bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`transition active:bg-${bgColor}-900 hover:bg-${bgColor}-700 rounded-xl m-2 p-5 text-base bg-${bgColor}-500 text-white font-bold`}
    >
      {children}
    </button>
  );
}

export default Button;
