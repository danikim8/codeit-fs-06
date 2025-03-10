import React, { useState } from "react";
import Counter from "./Counter";

const fruits = ["사과", "배", "딸기", "귤", "포도"];

function App() {
  const someValue = 0;
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit} 맛있다</li>
        ))}
      </ul>
      <button onClick={() => setIsCounterVisible(!isCounterVisible)}>
        카운터 토글
      </button>
      <div>
        {someValue && (
          <Counter initialCount={0} step={1}>
            <h1>난 칠드런 이야</h1>
          </Counter>
        )}
      </div>
    </>
  );
}

export default App;
