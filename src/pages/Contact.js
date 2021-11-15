import React from 'react';
import styled from 'styled-components'
import { Wrapper } from '../globalStyles'

const FormRow = styled.div`
  display: flex;
  align-items: center;
  padding: 120px 0;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  border: 2px solid #64ffda;
  padding: 2rem 4rem;
  width: 100%;
  border-radius: 5px;

  @media screen and (max-width: 960px) {
    padding: 2rem 2rem;
  }
`;

const Label = styled.label`
  font-weight: 600;
  display: inline-block;
  margin-bottom: 10px;
  color: #ccd6f6;
`;

const InputStyle = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #64ffda;
  background-color: rgba(0,0,0,0);
  margin-bottom: 30px;
  color: #8892b0;
  font-size: 1rem;
`;

const TextareaStyle = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  border-bottom: 1px solid #64ffda;
  background-color: rgba(0,0,0,0);
  margin-bottom: 30px;
  color: #8892b0;
  font-size: 1rem;
`;

const SendButton = styled.button`
  background-color: rgba(0,0,0,0);
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(100,255,218,0.1);
    outline: none;
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <FormRow>
        <FormContainer>
          <form autoComplete="off">
            <Label>First Name</Label>
            <InputStyle type="text" id="firstname" name="firstname" />
            <Label>Last Name</Label>
            <InputStyle type="text" id="lastname" name="lastname" />
            <Label>Email</Label>
            <InputStyle type="text" id="email" name="email" />
            <Label>Leave us a message...</Label>
            <TextareaStyle rows="5" id="message" name="message" />
            <SendButton type="submit">Send</SendButton>
          </form>
        </FormContainer>
      </FormRow>
    </Wrapper>
  )
}

export default Contact
