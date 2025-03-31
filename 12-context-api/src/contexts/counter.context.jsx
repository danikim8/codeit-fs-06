import { createContext, useContext, useState } from "react";

// 1. 만든다
const CounterContext = createContext();

// 2. 사용한다
export const useCounter = () => useContext(CounterContext);

// 3. 범위를 지정해서 값을 내려준다
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const value = { count, setCount };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}
