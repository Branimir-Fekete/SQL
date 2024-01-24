import React, { useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import ButtonContainer from '../components/buttons/ButtonContainer';

const HeadingName = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #00308f;
`;

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

function SveucilistaScreen() {
  return (
    <>
    
      <HeadingName>Sveučilišta</HeadingName>
      <FormContainer>
        <Form>
          <Input
            type='text'
            name='naziv'
            placeholder='Naziv sveučilišta'
          />
          <Input
            type='text'
            name='adresa'
            placeholder='Adresa sveučilišta'
          />
          <ButtonContainer />
        </Form>
      </FormContainer>
    </>
  );
}

export default SveucilistaScreen;
