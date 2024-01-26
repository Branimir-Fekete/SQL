import styled from 'styled-components';
import HeroText from '../components/navigation/HeroText';

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
      <HeroText
        text='Početna stranica'
        beforeText='Početna stranica'
      />

      <StyledImage src='../images/img-1.png' />
    </>
  );
}

export default HomeScreen;
