import React from 'react';
import styled from 'styled-components';

const StyledSubmitButton = styled.button`
  position: relative;
  text-transform: uppercase;
  padding: 20px 35px;
  border: 2px solid #00308f;
  color: #00308f;
  font-size: 20px;
  letter-spacing: 4px;
  transition: 0.5s;
  border-radius: 15px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: #fff;
    border: 2px solid transparent;
  }

  span {
    position: absolute;
    background: #00308f;
    box-shadow: 0 0 10px #00308f, 0 0 20px #00308f, 0 0 30px #00308f,
      0 0 50px #00308f, 0 0 100px #00308f;
  }

  span:nth-child(1),
  span:nth-child(3) {
    width: 40px;
    height: 4px;
    border-radius: 15px;
  }

  span:nth-child(2),
  span:nth-child(4) {
    width: 4px;
    height: 40px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00308f;
    transform: scale(0);
    transition: 0.5s;
    z-index: -1;
    border-radius: 15px;
  }

  &:hover:before {
    transform: scale(1);
    transition-delay: 0.5s;
    box-shadow: 0 0 10px #00308f, 0 0 30px #00308f, 0 0 60px #00308f;
  }

  span:nth-child(1) {
    top: calc(50% - 2px);
    left: -50px;
    transition: 0.5s ease-in-out;
    transform-origin: left;
    transition-delay: 0.25s;
  }

  &:hover span:nth-child(1) {
    left: 50%;
    transform: scaleX(0);
    transition-delay: 0s;
  }

  span:nth-child(3) {
    top: calc(50% - 2px);
    right: -50px;
    transition: 0.5s ease-in-out;
    transform-origin: right;
    transition-delay: 0.25s;
  }

  &:hover span:nth-child(3) {
    right: 50%;
    transform: scaleX(0);
    transition-delay: 0s;
  }

  span:nth-child(2) {
    left: calc(50% - 2px);
    top: -50px;
    transition: 0.5s ease-in-out;
    transform-origin: top;
    transition-delay: 0.25s;
  }

  &:hover span:nth-child(2) {
    top: 50%;
    transform: scaleY(0);
    transition-delay: 0s;
  }

  span:nth-child(4) {
    left: calc(50% - 2px);
    bottom: -50px;
    transition: 0.5s ease-in-out;
    transform-origin: bottom;
    transition-delay: 0.25s;
  }

  &:hover span:nth-child(4) {
    bottom: 50%;
    transform: scaleY(0);
    transition-delay: 0s;
  }
`;

function SubmitButton({ children }) {
  return (
    <StyledSubmitButton>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </StyledSubmitButton>
  );
}

export default SubmitButton;
