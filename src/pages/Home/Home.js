import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyles';

// 160px = 80 navbar 80 footer for a full page;
const HeroBackground = styled.div`
  background-image: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0.54) 99.99%, rgba(0,0,0, 0.99) 100%) , url('https://images.pexels.com/photos/6446685/pexels-photo-6446685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height:85vh;
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

  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
  }
`;
const SubHeading = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const GetStarted = styled(Link)`
  display: flex;
  color: #fff;
  text-decoration: none;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    background: #fff;
    color: #000;
    border: 2px solid #000;
    transition: all 0.3 ease;
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
