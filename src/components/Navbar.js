import React, { useState } from 'react'
import styled from 'styled-components';
import { FaBars, FaBlogger, FaTimes } from 'react-icons/fa';

import CV from '../assets/CV.pdf';
import Menu from '../data/header.json';
import { Container } from '../globalStyles';

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  position: sticky;
  background: #0a192f;
`

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${Container}
`;

const NavLogo = styled.a`
  color: #64ffda;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-self: start;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
`;

const NavName = styled.p`
  color: #ccd6f6;
`;

const MobileIcon = styled.div`
  display: none;
  color: #64ffda;

  @media screen and (max-width: 960px) {
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
    align-items: center;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: ${({click}) => (click ? '100%' : '0')};
    position:absolute;
    top: 80px;
    right: 0;
    transition: all 0.3s ease;
    background: #0a192f;
  }
`;

const NavItem = styled.li`
  height: 80px
`;

const NavLinks = styled.a`
  color: #ccd6f6;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  height: 100%;
  padding: 0.1rem 1rem;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #64ffda;
      transition: all 0.3 ease;
    }
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = (type = 'header') => {
    // prevent changing state when it is not a dropdown.
    if (type === 'menu' && window.innerWidth > 960) {
      return;
    }

    setClick(!click)
  }

  return (
    <React.Fragment>
      <Nav>
        <NavbarContainer>
          <NavLogo href="#home">
            <NavName>Steve Vinsensius Jo</NavName>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu click={click}>
            {Menu.map((data, index) => (
              <NavItem key={index}>
                <NavLinks href={data.to} onClick={() => handleClick('menu')}>
                  {data.name}
                </NavLinks>
              </NavItem>
            ))}
            <NavItem>
              <NavLinks href={CV} onClick={() => handleClick('menu')} target="_blank" rel="noopener noreferrer">
                Resume
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  )
}

export default Navbar
