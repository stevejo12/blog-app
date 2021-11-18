import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
`;

const SocialContainer = styled.ul`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 5px auto;
    width: 200px;
  }
`;

const SocialInfo = styled.li`
  display: flex;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Footer = () => {
  return (
    <React.Fragment>
      <FooterContainer>
        <SocialContainer>
          <SocialInfo>
            <SocialLink href="https://www.github.com/stevejo12" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </SocialLink>
          </SocialInfo>
          <SocialInfo>
            <SocialLink href="https://www.instagram.com/josteve4" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </SocialLink>
          </SocialInfo>
          <SocialInfo>
            <SocialLink href="https://www.facebook.com/steve.v.jo" target="_blank" rel="noreferrer">
              <FacebookOutlinedIcon />
            </SocialLink>
          </SocialInfo>
          <SocialInfo>
            <SocialLink href="https://www.linkedin.com/in/stevevjo/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </SocialLink>
          </SocialInfo>
        </SocialContainer>
        <Container>
          <Text>Copyright © Website 2021 | By Steve Jo</Text>
        </Container>
      </FooterContainer>
    </React.Fragment>
  )
}

export default Footer
