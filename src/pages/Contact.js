import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components'
import { Wrapper } from '../globalStyles'
import { useRef } from 'react';

const HeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  // padding-top: 0px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 10px;
  color: #ccd6f6;
`;

const Subtitle = styled.h4`
  margin-bottom: 50px;
  text-align: center;
  color: #8892b0;

  @media screen and (max-width: 960px) {
    padding: 0 0.5rem;
  }
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;

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
  const formRef = useRef();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmitMessage = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then((result) => {
      console.log('result: ', result.text);
    }, (error) => {
      console.log("error: ", error.text);
    })
  }

  return (
    <Wrapper id="contact">
      <HeaderRow>
        <Title>Get in touch</Title>
        <Subtitle>
          Currently I'm looking for a full time job in Frontend development. Don't hesitate to contact me if you just want to say hello. I'll try my best to get back to you soon!
        </Subtitle>
      </HeaderRow>
      <FormRow>
        <FormContainer>
          <form autoComplete="off" ref={formRef}>
            <Label>First Name</Label>
            <InputStyle 
              type="text"
              value={firstname}
              name="firstname"
              onChange={(e) => setFirstname(e.target.value)} 
            />
            <Label>Last Name</Label>
            <InputStyle 
              type="text"
              value={lastname}
              name="lastname"
              onChange={(e) => setLastname(e.target.value)} 
            />
            <Label>Email</Label>
            <InputStyle 
              type="text"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)} 
            />
            <Label>Leave us a message...</Label>
            <TextareaStyle 
              rows="5"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <SendButton type="submit" onClick={onSubmitMessage}>
              Send
            </SendButton>
          </form>
        </FormContainer>
      </FormRow>
    </Wrapper>
  )
}

export default Contact
