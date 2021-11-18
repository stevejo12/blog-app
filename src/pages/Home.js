import React from 'react'
import styled from 'styled-components';

import { Wrapper } from '../globalStyles';

const HomeWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
`;

const HeroBackground = styled.div`
  background-image: url('https://images.pexels.com/photos/6446685/pexels-photo-6446685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(75%);
  height: calc(100vh - 80px);
`;
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;

  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
  }
`;
const SubHeading = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #1f1f23;
  font-weight: bold;
  font-size: 1.5rem;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;

const GetStarted = styled.a`
  display: flex;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: rgb(35,70,250);
  color: rgb(248,248,248);

  &:hover {
    background-color: rgb(46,144,250);
    outline: none;
  }
`;

const Home = () => {
  return (
    <React.Fragment>
      <HeroBackground>
        <HomeWrapper>
          <HeroContainer>
            <Heading>Welcome to my Portfolio Website</Heading>
            <SubHeading>Click Get Started to start exploring.</SubHeading>
            <GetStarted href="#about">Get Started</GetStarted>
          </HeroContainer>
        </HomeWrapper>
      </HeroBackground>
    </React.Fragment>
  )
}

export default Home;
