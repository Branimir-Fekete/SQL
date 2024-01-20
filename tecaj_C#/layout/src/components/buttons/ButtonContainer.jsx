import React from 'react';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';
import SubmitButton from './SubmitButton';

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7rem;
  margin-top: 40px;
`;

function ButtonContainer() {
  return (
    <>
      <BtnContainer>
        <DeleteButton>Delete</DeleteButton>
        <UpdateButton>Update</UpdateButton>
        <SubmitButton>Submit</SubmitButton>
      </BtnContainer>
    </>
  );
}

export default ButtonContainer;
