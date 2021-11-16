import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../globalStyles';

const HeroBackground = styled.div`
  background-image: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0.54) 99.99%, rgba(0,0,0, 0.99) 100%) , url('https://images.pexels.com/photos/6446685/pexels-photo-6446685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: min(calc(100vh - 160px), 85vh);
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
  color: #ccd6f6;

  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
  }
`;
const SubHeading = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #8892b0;
`;

const GetStarted = styled(Link)`
  display: flex;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: rgba(0,0,0,0);
  color: #64ffda;
  border: 1px solid #64ffda;

  &:hover {
    background-color: rgba(100,255,218,0.1);
    outline: none;
  }
`;

const Home = () => {
  return (
    <React.Fragment>
      <HeroBackground>
        <Container style={{ height: '100%' }}>
          <HeroContainer>
            <Heading>Welcome to my Blog Website</Heading>
            <SubHeading>Click Get Started for lastest blog posts.</SubHeading>
            <GetStarted to="/blog">Get Started</GetStarted>
          </HeroContainer>
        </Container>
      </HeroBackground>
    </React.Fragment>
  )
}

export default Home;
