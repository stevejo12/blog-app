import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Wrapper = styled.div`
  position: fixed;
  left: 40px;
  right: auto;
  bottom: 0;
  z-index: 10;
  width: 40px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #a8b2d1;
  width: 40px;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #a8b2d1; 
  }
`;

const SocialContainer = styled.li`
  display:flex;
  // margin-bottom: 20px;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: inherit;
  padding: 10px;

  &:hover {
    color: #64ffda;
    transform: translateY(-3px);
  }

  > * {
    width: 20px !important;
    height: 20px !important;
  }
`;

const LeftSocials = () => {
  return (
    <Wrapper>
      <Container>
        <SocialContainer>
          <SocialLink href="https://www.github.com/stevejo12" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </SocialLink>
        </SocialContainer>
        <SocialContainer>
          <SocialLink href="https://www.instagram.com/josteve4" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </SocialLink>
        </SocialContainer>
        <SocialContainer>
          <SocialLink href="https://www.facebook.com/steve.v.jo" target="_blank" rel="noreferrer">
            <FacebookOutlinedIcon />
          </SocialLink>
        </SocialContainer>
        <SocialContainer>
          <SocialLink href="https://www.linkedin.com/in/stevevjo/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </SocialLink>
          </SocialContainer>
      </Container>
    </Wrapper>
  )
}

export default LeftSocials;
