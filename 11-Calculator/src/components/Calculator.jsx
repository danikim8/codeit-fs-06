import React, { useState } from "react";
import styled from "styled-components";
import Controls from "./Controls";
import Display from "./Display";
import Header from "./Header";

function Calculator() {
  const [prevValue, setPrevValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [activeOperator, setActiveOperator] = useState(null);

  const handleClickFunctionalButton = (type) => {
    if (type === "AC") {
      setCurrentValue(0);
    }
  };

  const handleClickNumberButton = (number) => {
    if (!!activeOperator && prevValue === currentValue) {
      setCurrentValue(number);

      return;
    }

    if (currentValue === 0) {
      setCurrentValue(number);
    } else {
      const newResult = Number(String(currentValue) + String(number));
      setCurrentValue(newResult);
    }
  };

  const handleClickOperatorButton = (operator) => {
    if (operator === "=") {
      if (activeOperator === "+") {
        setCurrentValue(prevValue + currentValue);
      }
    } else {
      setActiveOperator(operator);
      setPrevValue(currentValue);
    }
  };

  return (
    <Container>
      <Header />
      <Display result={currentValue} />
      <Controls
        onClickFunctionalButton={handleClickFunctionalButton}
        onClickNumberButton={handleClickNumberButton}
        onClickOperatorButton={handleClickOperatorButton}
      />
    </Container>
  );
}

const Container = styled.main`
  width: 200px;
  height: 364px;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 12px;
  padding: 16px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;

export default Calculator;
