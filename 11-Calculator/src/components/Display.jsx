import React from "react";
import styled from "styled-components";

function Display({ result }) {
  return (
    <Container>
      <Content>{result}</Content>
    </Container>
  );
}

const Container = styled.section`
  height: 92px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Content = styled.span`
  font-size: 40px;
`;

export default Display;
