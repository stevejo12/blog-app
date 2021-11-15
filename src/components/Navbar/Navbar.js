import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaBlogger, FaTimes } from 'react-icons/fa';

import { Container } from '../../globalStyles';

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  position: sticky;
  
`

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${Container}
`;

const NavLogo = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-self: start;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`;

const NavIcon = styled(FaBlogger)`
  margin-right: 0.5rem;
`;

const MobileIcon = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 960px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
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

const NavLinks = styled(Link)`
  color: #fff;
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
      color: #4b59f7;
      transition: all 0.3 ease;
    }
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <React.Fragment>
      <Nav>
        <NavbarContainer>
          <NavLogo to ="/">
            <NavIcon />
            Jeco's Blog
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu click={click}>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/blog">My Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  )
}

export default Navbar
