import styled from 'styled-components';
import { Link as linkR } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { NavLink } from 'react-router-dom';


export const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.8); /* Slightly transparent white background */
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(linkR)`
  color: #333333; /* Dark color for better visibility */
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #333333; /* Dark color for visibility on light background */
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  position: relative;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  /* Hover Effects */
  &:hover {
    color: #01bf71;
  }

  /* Arrow animation on hover */
  &::after {
    content: "→";
    position: absolute;
    right: -20px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    right: 0;
    opacity: 1;
  }

  /* Active Link Styling */
  &.active {
    border-bottom: 3px solid #01bf71;
    color: #01bf71;
  }
`;

export const LogoImage = styled.img`
  height: 150px;
  width: auto; /* Ensures the image keeps its aspect ratio */
  margin-right: 8px;
  display: block; /* Ensures the image element is displayed properly */
`;