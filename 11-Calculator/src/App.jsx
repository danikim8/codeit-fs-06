import React from "react";
import styled from "styled-components";
import Calculator from "./components/Calculator";

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
