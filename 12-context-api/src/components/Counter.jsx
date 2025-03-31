import React from "react";
import { useCounter } from "../contexts/counter.context";

function Counter() {
  const counter = useCounter();

  return (
    <div>
      <button onClick={() => counter.setCount(counter.count - 1)}>-</button>
      <span>{counter.count}</span>
      <button onClick={() => counter.setCount(counter.count + 1)}>+</button>
    </div>
  );
}

export default Counter;
