import React from 'react';
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  Button,
} from './HeroElement';
import Sidebar from '../Sidebar';

const HeroSection = () => {
  return (
    <HeroContainer>
       <HeroContent>
        <HeroH1>Navigate Your Purpose, Shape Your Future</HeroH1>
        <HeroP>Explore your Purpose, Skills, Passions, and Opportunities</HeroP>
        <HeroBtnWrapper>
          <Button>Begin Your Journey</Button>
        </HeroBtnWrapper>
       </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
