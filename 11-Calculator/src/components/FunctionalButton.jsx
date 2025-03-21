import React from "react";
import ControlButton from "./ControlButton";

function FunctionalButton({ type, onClick: handleClick }) {
  return (
    <ControlButton onClick={() => handleClick(type)} color={"#999"}>
      {type}
    </ControlButton>
  );
}

export default FunctionalButton;
