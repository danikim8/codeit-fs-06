import React from "react";
import styled from "styled-components";

const fruits = ["사과", "귤", "배", "오렌지", "포도"];

function Fruits() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <Fruit key={fruit} $name={fruit} $fontSize={10}>
          {fruit}
        </Fruit>
      ))}
    </ul>
  );
}

// 스타일링이 들어간 컴포넌트를 만드는 것
const Fruit = styled.li`
  font-size: ${(props) => `${props.$fontSize}px`};
  color: ${(props) => (props.$name === "귤" ? "blue" : "red")};
  background-color: yellow;
`;

export default Fruits;
