import styled from 'styled-components';

const StyledUpdateButton = styled.button`
  background: none;
  border: 3px solid #03C03C;
  color: #03C03C;
  font-family: sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  padding: 20px 40px;
  cursor: pointer;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;

  &:before {
    content: 'Update';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #03C03C;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(5);
    opacity: 0;
    transition: all 0.5s;
  }

  &:hover:before {
    transform: scale(1);
    opacity: 1;
  }
`;

function UpdateButton({ children }) {
  return <StyledUpdateButton>{children}</StyledUpdateButton>;
}

export default UpdateButton;
