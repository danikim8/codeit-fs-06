import { useEffect, useState } from "react";

function App() {
  const [myChoice, setMyChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (myChoice !== null) {
      const randomNumber = Math.floor(Math.random() * 1000000);

      if (randomNumber % 3 === 0) {
        setComputerChoice("가위");
      } else if (randomNumber % 3 === 1) {
        setComputerChoice("바위");
      } else {
        setComputerChoice("보");
      }
    }
  }, [myChoice]);

  useEffect(() => {
    if (computerChoice !== null) {
      if (myChoice === computerChoice) {
        setWinner("비겼습니다");
      } else if (
        (myChoice === "가위" && computerChoice === "보") ||
        (myChoice === "바위" && computerChoice === "가위") ||
        (myChoice === "보" && computerChoice === "바위")
      ) {
        setWinner("당신이 이겼습니다");
      } else {
        setWinner("컴퓨터가 이겼습니다");
      }
    }
  }, [computerChoice]);

  return (
    <div>
      <h1>가위, 바위, 보 게임</h1>
      <hr />

      <div>
        <h4>무엇을 내시겠어요?</h4>
        <div>
          <button onClick={() => setMyChoice("가위")}>가위</button>
          <button onClick={() => setMyChoice("바위")}>바위</button>
          <button onClick={() => setMyChoice("보")}>보</button>
        </div>
      </div>

      <hr />
      <div>
        <h4>컴퓨터는 "{computerChoice}"를 냈어요</h4>
      </div>

      <hr />

      <div>
        <h4>결과</h4>
        <p>당신 vs. 컴퓨터</p>
        <p>
          {myChoice} vs. {computerChoice}
        </p>

        <strong>{winner}</strong>
      </div>
    </div>
  );
}

export default App;
