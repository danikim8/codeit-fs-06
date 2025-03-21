import React from "react";
import styled from "styled-components";
import ControlButton from "./ControlButton";

function NumberButton({ number, onClick: handleClick }) {
  return (
    <StyledNumberButton onClick={() => handleClick(number)} color={"#666"}>
      {number}
    </StyledNumberButton>
  );
}

const StyledNumberButton = styled(ControlButton)`
  transition: background-color 300ms;

  &:hover {
    background-color: #777;
  }

  &:active {
    background-color: #888;
  }
`;

export default NumberButton;
