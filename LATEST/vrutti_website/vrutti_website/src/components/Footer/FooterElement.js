import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #282828;
  padding: 20px 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1000px;
`;

export const FooterText = styled.p`
  margin: 5px 0;
`;

export const FooterContact = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 0 10px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
