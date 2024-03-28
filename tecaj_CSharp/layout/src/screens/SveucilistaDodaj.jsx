import React from 'react';
import { useNavigate } from 'react-router-dom';
import SveucilisteService from '../services/SveucilisteService';
import { RoutesNames } from '../constants';
import styled from 'styled-components';
import HeroText from '../components/navigation/HeroText';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SubmitButton from '../components/buttons/SubmitButton';
import BackButton from '../components/buttons/BackButton';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledFormContainer = styled.div`
  width: 50%;
  padding: 20px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

const StyledFormGroup = styled(Form.Group)`
  margin-bottom: 20px;

  label {
    font-weight: bold;
    font-size: 18px;
  }

  input {
    border: 2px solid #00308F;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
    margin-top: 10px;
  }
`;

function SveucilistaDodaj() {
  const navigate = useNavigate();

  async function dodaj(sveuciliste) {
    const odgovor = await SveucilisteService.post(sveuciliste);
    if (odgovor.greska) {
      console.log(odgovor.poruka);
      alert('pogledaj konzolu');
      return;
    }
    navigate(RoutesNames.SVEUCILISTE_PREGLED);
  }

  function obradiSubmit(e) {
    e.preventDefault();

    const podaci = new FormData(e.target);
    const svuciliste = {
      naziv: podaci.get('naziv'),
      adresa: podaci.get('adresa'),
    };
    dodaj(svuciliste);
  }

  return (
    <>
      <HeroText
        beforeText='Dodaj sveučilište'
        text='Dodaj sveučilište'
      />
      <CenteredContainer>
        <StyledFormContainer>
          <Form onSubmit={obradiSubmit}>
            <StyledFormGroup controlId='naziv'>
              <Form.Label>Naziv sveučilišta</Form.Label>
              <Form.Control
                type='text'
                placeholder='Unesite naziv sveučilišta'
                required
              />
            </StyledFormGroup>

            <StyledFormGroup controlId='adresa'>
              <Form.Label>Adresa sveučilišta</Form.Label>
              <Form.Control
                type='text'
                placeholder='Unesite adresu sveučilišta'
                required
              />
            </StyledFormGroup>

            <StyledButtonContainer>
              <Link to={RoutesNames.SVEUCILISTE_PREGLED}>
                <BackButton>Natrag</BackButton>
              </Link>
              <SubmitButton>Dodaj</SubmitButton>
            </StyledButtonContainer>
          </Form>
        </StyledFormContainer>
      </CenteredContainer>
    </>
  );
}

export default SveucilistaDodaj;
