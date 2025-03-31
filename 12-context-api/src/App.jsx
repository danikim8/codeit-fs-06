import Left from "./components/Left";
import Right from "./components/Right";
import { CounterProvider } from "./contexts/counter.context";

function App() {
  return (
    <CounterProvider>
      <div className="app">
        <Left />
        <Right />
      </div>
    </CounterProvider>
  );
}

export default App;
