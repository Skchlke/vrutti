import React from 'react';
import Lottie from 'lottie-react';
import careerPath from '../../animations/careerPath.json';
import personalGrowth from '../../animations/personalGrowth.json';
import connectedDots from '../../animations/connectedDots.json';
import purposeDrivenLife from '../../animations/purposeDrivenLife.json';
import {
  CareerSectionContainer,
  SplitSection,
  TextSection,
  AnimationSection,
  Title,
  Subtitle,
  AnimationGrid,
  AnimationItem,
  AnimationLabel,
} from './CareerElement';

const CareerSec = () => {
  return (
    <CareerSectionContainer>
      <SplitSection>
        {/* Left Section - Text Content */}
        <TextSection>
          <Title>What is Vrutti?</Title>
          <Subtitle>
            At Vrutti, we empower individuals to unlock their true potential and
            craft careers that truly matter. Born out of the Ikigai philosophy,
            Vrutti transcends beyond traditional career guidance. We address the
            deeper challenges of purpose and alignment in professional life.
          </Subtitle>
          <Subtitle>
            <strong>Why Vrutti Exists:</strong> In a world full of options, it’s
            easy to lose sight of what truly resonates with you. Vrutti bridges
            the gap between your passion, mission, profession, and vocation,
            turning ambiguity into clarity.
          </Subtitle>
          <Subtitle>
            <strong>What Sets Us Apart:</strong> Unlike generic career tools,
            Vrutti leverages AI, personalized insights, and the Ikigai framework
            to craft tailored career journeys. It’s not just about what you do –
            it’s about why you do it.
          </Subtitle>
        </TextSection>

        {/* Right Section - Animations */}
        <AnimationSection>
          <AnimationGrid>
            <AnimationItem>
              <Lottie animationData={careerPath} loop={true} style={{ width: 150, height: 150 }} />
              <AnimationLabel>Career Path</AnimationLabel>
            </AnimationItem>
            <AnimationItem>
              <Lottie animationData={personalGrowth} loop={true} style={{ width: 150, height: 150 }} />
              <AnimationLabel>Personal Growth</AnimationLabel>
            </AnimationItem>
            <AnimationItem>
              <Lottie animationData={connectedDots} loop={true} style={{ width: 150, height: 150 }} />
              <AnimationLabel>Connected Dots</AnimationLabel>
            </AnimationItem>
            <AnimationItem>
              <Lottie animationData={purposeDrivenLife} loop={true} style={{ width: 150, height: 150 }} />
              <AnimationLabel>Purpose-driven Life</AnimationLabel>
            </AnimationItem>
          </AnimationGrid>
        </AnimationSection>
      </SplitSection>
    </CareerSectionContainer>
  );
};

export default CareerSec;
