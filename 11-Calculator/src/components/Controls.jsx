import React from "react";
import styled from "styled-components";
import FunctionalButton from "./FunctionalButton";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";

function Controls({
  onClickFunctionalButton: handleClickFunctionalButton,
  onClickNumberButton: handleClickNumberButton,
  onClickOperatorButton: handleClickOperatorButton,
}) {
  return (
    <Container>
      <FunctionalButton onClick={handleClickFunctionalButton} type={"AC"} />
      <FunctionalButton onClick={handleClickFunctionalButton} type={"+/-"} />
      <FunctionalButton onClick={handleClickFunctionalButton} type={"%"} />
      <OperatorButton onClick={handleClickOperatorButton} operator={"÷"} />
      <NumberButton onClick={handleClickNumberButton} number={7} />
      <NumberButton onClick={handleClickNumberButton} number={8} />
      <NumberButton onClick={handleClickNumberButton} number={9} />
      <OperatorButton onClick={handleClickOperatorButton} operator={"×"} />
      <NumberButton onClick={handleClickNumberButton} number={4} />
      <NumberButton onClick={handleClickNumberButton} number={5} />
      <NumberButton onClick={handleClickNumberButton} number={6} />
      <OperatorButton onClick={handleClickOperatorButton} operator={"-"} />
      <NumberButton onClick={handleClickNumberButton} number={1} />
      <NumberButton onClick={handleClickNumberButton} number={2} />
      <NumberButton onClick={handleClickNumberButton} number={3} />
      <OperatorButton onClick={handleClickOperatorButton} operator={"+"} />
      <NumberButton number={""} />
      <NumberButton onClick={handleClickNumberButton} number={0} />
      <NumberButton number={"."} />
      <OperatorButton onClick={handleClickOperatorButton} operator={"="} />
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
`;

export default Controls;
