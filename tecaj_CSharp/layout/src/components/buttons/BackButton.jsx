import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  text-decoration: none;
  display: block;
  width: 160px;
  height: 60px;
  color: black;
  line-height: 60px;
  text-align: center;
  text-transform: capitalize;
  font-size: 25px;
  position: relative;
  transition: all 0.5s;

  &:hover {
    color: white;
  }

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: transparent;
    border: 2px solid black;
    z-index: -1;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      width: 8%;
      height: 500%;
      background-color: white;
      top: 50%;
      left: 50%;
      transition: all 0.5s;
      transform: translate(-50%, -50%) rotate(-60deg);
    }
  }

  &:hover span:before {
    width: 100%;
    background-color: black;
    transform: translate(-50%, -50%) rotate(60deg);
  }
`;

function BackButton() {
  return (
    <Button>
      Nazad <span></span>
    </Button>
  );
}

export default BackButton;
