import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../globalStyles'

const AboutRow = styled.div`
  display: flex;
  padding: 120px 0;
  margin: 0 100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    margin: 0;
    padding: 60px;
  }
`;

const AboutImage = styled.img`
  width: 474px;
  height: auto;

  @media screen and (max-width: 960px) {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }
`;

const AboutText = styled.div`
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #ccd6f6;
`;

const Subtitle = styled.h4`
  font-size: 1.3rem;
  color: #8892b0;
`;

const Text = styled.p`
  text-align: justify;
  margin-bottom: 20px;
  margin-top: 20px;
  color: #8892b0;
`;

const About = () => {
  return (
    <Wrapper>
      <AboutRow>
        <AboutImage src="https://images.pexels.com/photos/6803544/pexels-photo-6803544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <AboutText>
          <Heading>Hi I'm Jane Doe</Heading>
          <Subtitle>I am a Frontend Developer</Subtitle>
          <Text>
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.
          </Text>
          <Text>
            This is a great spaceto write long text about your company and your services. You can user this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
          </Text>
        </AboutText>
      </AboutRow>
    </Wrapper>
  )
}

export default About
