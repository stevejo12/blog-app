import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  left: auto;
  right: 40px;
  z-index: 10;
  width: 40px;
  bottom: 0;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #a8b2d1;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #a8b2d1; 
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  margin: 20px auto;
  color #a8b2d1;
  writing-mode: vertical-rl;

  &:hover {
    color: #64ffda;
    transform: translateY(-3px);
  }
`

const RightSocials = () => {
  return (
    <Wrapper>
      <Container>
        <SocialLink href="mailto:steve.v.jo@gmail.com">
          steve.v.jo@gmail.com
        </SocialLink>
      </Container>
    </Wrapper>
  )
}

export default RightSocials;
