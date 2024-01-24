import Header from '../components/Header';
import styled from 'styled-components';

const HeadingName = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #00308f;
`;

const StyledImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 700px;
  height: 500px;
`;

function HomeScreen() {
  return (
    <>
      <HeadingName>Početna stranica</HeadingName>
     

      <StyledImage src='../images/img-1.png' />
    </>
  );
}

export default HomeScreen;
