import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonContainer from '../components/buttons/ButtonContainer';
import HeroText from '../components/navigation/HeroText';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: 2px solid #00308f;
  color: #00308f;
  &:focus {
    outline: none;
    border-color: #00308f;
  }
`;

function ProfesorScreen() {
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    oib: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Podaci su:', formData);
  };

  return (
    <>
      <HeroText
        beforeText='Profesori'
        text='Profesori'
      />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            type='text'
            name='ime'
            placeholder='Ime'
            value={formData.ime}
            onChange={handleChange}
          />
          <Input
            type='text'
            name='prezime'
            placeholder='Prezime'
            value={formData.prezime}
            onChange={handleChange}
          />
          <Input
            type='text'
            name='oib'
            placeholder='OIB'
            value={formData.oib}
            onChange={handleChange}
          />
          <ButtonContainer />
        </Form>
      </FormContainer>
    </>
  );
}

export default ProfesorScreen;
