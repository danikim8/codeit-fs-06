import React from "react";
import styled from "styled-components";

function ControlButton({ color, children, onClick: handleClick, className }) {
  return (
    <StyledButton $color={color} onClick={handleClick} className={className}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  all: unset;
  width: 100%;
  background-color: ${(props) => props.$color};
  border-radius: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
`;

export default ControlButton;
