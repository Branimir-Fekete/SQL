import React from 'react';
import styled, { keyframes } from 'styled-components';

const neonAnimation = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  background: #051130;
  padding: 10px;
  max-width: 175px;
  margin-bottom: 20px;
`;

const Link = styled.a`
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  color: #03e9f4;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none; /* Dodano */
  font-size: 24px;
  transition: 0.5s;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  overflow: hidden;
  position: relative;

  &:hover {
    background: #03e9f4;
    color: #051130;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }

  /* Dodano */
  * {
    text-decoration: none;
  }

  span {
    position: absolute;
    display: block;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: ${neonAnimation} 1s linear infinite;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    animation-delay: 0s;
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    animation-delay: 0.25s;
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    animation-delay: 0.5s;
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    animation-delay: 0.75s;
  }
`;

function AddButton({ children }) {
  return (
    <LinkContainer>
      <Link>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
      </Link>
    </LinkContainer>
  );
}

export default AddButton;
