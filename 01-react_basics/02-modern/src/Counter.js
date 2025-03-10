import React, { useEffect, useState } from "react";
import { MemoizedGreeting } from "./Greeting";

function Counter({ initialCount, step, children }) {
  const [count, setCount] = useState(initialCount);

  const minus = () => {
    setCount(count - step);
  };
  const plus = () => {
    setCount(count + step);
  };

  useEffect(() => {
    if (count % 5 === 0) {
      console.log("5의 배수", count);
    }
  }, [count]);

  return (
    <div>
      {children}
      <MemoizedGreeting />
      <button onClick={minus}>-</button>
      <span>{count}</span>
      <button onClick={plus}>+</button>
    </div>
  );
}

export default Counter;
