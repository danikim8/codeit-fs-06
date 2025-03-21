import React from "react";
import ControlButton from "./ControlButton";

function OperatorButton({ operator, onClick: handleClick }) {
  return (
    <ControlButton onClick={() => handleClick(operator)} color={"orange"}>
      {operator}
    </ControlButton>
  );
}

export default OperatorButton;
