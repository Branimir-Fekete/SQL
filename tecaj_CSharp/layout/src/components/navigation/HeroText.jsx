import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 1rem;
  position:relative;
`;

const animate = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`;

const LoadingText = styled.h1`
  font-size: 40px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 10px;
  color: #007fff;
  position: relative;
  white-space: nowrap;
`;

const BeforeText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: #00308f;
  overflow: hidden;
  border-right: 4px solid #00308f;
  animation: ${animate} 5s linear infinite;
`;

function HeroText({ text, beforeText }) {
  return (
    <Container>
      <LoadingText>
        {beforeText && <BeforeText>{beforeText}</BeforeText>}
        {text}
      </LoadingText>
    </Container>
  );
}

export default HeroText;
