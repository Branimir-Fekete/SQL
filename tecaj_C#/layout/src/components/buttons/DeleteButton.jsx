import React from 'react';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  width: 200px;
  height: 70px;
  color: #cc0000;
  background-color: transparent;
  font-size: 20px;
  border: none;
  text-transform: uppercase;
  line-height: 80px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  letter-spacing: 3px;
  transition: all 0.5s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background-color: #cc0000;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: all 0.5s;
    z-index: -1;
    opacity: 0;
  }

  &:before {
    left: 0;
    box-shadow: -100px 0 0 #cc0000;
  }

  &:after {
    right: 0;
    box-shadow: 100px 0 0 #cc0000;
  }

  &:hover:before {
    left: 50%;
    box-shadow: 30px 0 0 #cc0000;
    transform: translateX(-50%) translateY(-50%);
    opacity: 1;
  }

  &:hover:after {
    right: 50%;
    box-shadow: -30px 0 0 #cc0000;
    transform: translateX(50%) translateY(-50%);
    opacity: 1;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #cc0000;
    border-radius: 8px;
    transform: scale(0);
    transition: all 0.4s;
    z-index: -1;
  }

  &:hover span {
    transform: scale(1);
    transition-delay: 0.4s;
  }

  &:hover {
    color: #fff;
    transition-delay: 0.4s;
  }
`;

function DeleteButton({ children }) {
  return (
    <StyledDeleteButton>
      <span></span>
      {children}
    </StyledDeleteButton>
  );
}

export default DeleteButton;
