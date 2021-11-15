import React from 'react'
import styled from 'styled-components'
import { Container } from '../globalStyles'

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const Text = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #a8b2d1;
`;

const Footer = () => {
  return (
    <React.Fragment>
      <FooterContainer>
        <Container>
          <Text>Copyright © Website 2021 | By Steve Jo</Text>
        </Container>
      </FooterContainer>
    </React.Fragment>
  )
}

export default Footer
