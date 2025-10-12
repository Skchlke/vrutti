import React from 'react';
import {
  FooterContainer,
  FooterWrap,
  FooterText,
  FooterContact,
  SocialIcons,
  SocialIconLink,
} from './FooterElement';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterText>Vrutti - Aligning Careers with Personal Passions</FooterText>
        <FooterContact>Contact: support@vrutti.com</FooterContact>
        <SocialIcons>
          <SocialIconLink href="/" aria-label="Facebook">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href="/" aria-label="Twitter">
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href="/" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIconLink>
        </SocialIcons>
        <FooterText>© {new Date().getFullYear()} Vrutti. All rights reserved.</FooterText>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
