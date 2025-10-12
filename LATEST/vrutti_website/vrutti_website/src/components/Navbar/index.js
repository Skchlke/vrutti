// src/components/Navbar/index.js
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, LogoImage, NavLinkStyled } from './NavbarElement';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import nImage from '../../images/Vrutti_logo.png';

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        {/* Logo Navigates to Home */}
        <NavLogo>
          <Link to="/">
            <LogoImage src={nImage} />
          </Link>
        </NavLogo>

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/dhero">Discover</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/dcontact">Contact</NavLinkStyled>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
