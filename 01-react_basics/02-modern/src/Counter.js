import React, { useState } from "react";

function Counter({ initialCount, step }) {
  const [count, setCount] = useState(initialCount);

  const minus = () => setCount(count - step);
  const plus = () => setCount(count + step);

  return (
    <div>
      <button onClick={minus}>-</button>
      <span>{count}</span>
      <button onClick={plus}>+</button>
    </div>
  );
}

export default Counter;
