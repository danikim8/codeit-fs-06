import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter initialCount={0} step={1} />
      <Counter initialCount={100} step={100} />
      <Counter initialCount={10000} step={10000} />
    </div>
  );
}

export default App;
