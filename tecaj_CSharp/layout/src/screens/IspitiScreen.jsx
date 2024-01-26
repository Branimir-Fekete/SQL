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

function IspitiScreen() {
  const [formData, setFormData] = useState({
    naziv: '',
    datum: '',
    ocijena: '',
    prolaz: '',
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
        beforeText='Ispiti'
        text='Ispiti'
      />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            type='text'
            name='naziv'
            placeholder='Naziv ispita'
            value={formData.naziv}
            onChange={handleChange}
          />
          <Input
            type='date'
            name='datum'
            placeholder='Datum'
            value={formData.datum}
            onChange={handleChange}
          />
          <Input
            type='number'
            name='ocijena'
            placeholder='Ocijena'
            value={formData.ocijena}
            onChange={handleChange}
          />
          <Input
            type='number'
            name='prolaz'
            placeholder='Prolaz (0 ili 1)'
            value={formData.prolaz}
            onChange={handleChange}
          />
          <ButtonContainer />
        </Form>
      </FormContainer>
    </>
  );
}

export default IspitiScreen;
