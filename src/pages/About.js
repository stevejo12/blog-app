import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../globalStyles'
import ProfilePicture  from '../assets/profile-picture.jpg';

const AboutRow = styled.div`
  display: flex;
  padding-top: 120px;
  margin: 0 100px;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
    margin: 0;
    align-items: center;
  }
`;

const AboutImage = styled.img`
  width: 300px;
  height: 300px;

  @media screen and (max-width: 960px) {
    display: block;
    margin: 0 auto;
  }

  // check when width < 300px with padding 60px from Wrapper
  @media screen and (max-width: 360px) {
    width: 100%;
    height: auto;
  }
`;

const AboutText = styled.div`
  padding: 20px;
`;

const SubHeading = styled.h1`
  font-size: 0.8rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #ccd6f6;
`;

const Text = styled.p`
  text-align: justify;
  margin-bottom: 20px;
  margin-top: 20px;
  color: #8892b0;
`;

const TextLink = styled.a`
  color: #64ffda;
  text-decoration: none;
`;

const LanguageList = styled.ul`
  list-style-position: inside;
`;

const Language = styled.li`
  padding-left: 10px;
`;

const About = () => {
  return (
    <Wrapper id="about">
      <AboutRow>
        <AboutText>
          <SubHeading>Hi, My name is</SubHeading>
          <Heading>Steve Vinsensius Jo</Heading>
          <Text>
            I start programming when I was in the university. When creating web pages always help improving my creativity and curiousity. Furthermore, the exploration has hooked me into coding. It started in form of HTML and CSS when I can create a page like newspaper.
          </Text>
          <Text>
            Shifting focus to present day, I've had the privilege of working as an intern in <TextLink href="https://www.tiket.com" target="_blank" rel="noreferrer">one of the biggest online travel agency in Indonesia</TextLink>. My main focus today is to find a new opportunity as full time job in Frontend Developer / Software Developer.
          </Text>
          <Text>
            Here are technologies that I've been working with recently:
          </Text>
          <LanguageList>
            <Language>Javascript (ES6+)</Language>
            <Language>React JS</Language>
            <Language>Express JS</Language>
            <Language>Go</Language>
          </LanguageList>
        </AboutText>
        <AboutImage 
          src={ProfilePicture} 
          alt=""
        />
      </AboutRow>
    </Wrapper>
  )
}

export default About
