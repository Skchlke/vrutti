import React from 'react';
import { WorkContainer, WorkTitle, WorkSteps, StepCard, StepIcon, StepDescription } from './WorkElement';
import { FaClipboardCheck, FaLightbulb, FaCompass } from 'react-icons/fa'; // Assuming these icons or similar are available

const WorkSec = () => {
  return (
    <WorkContainer>
      <WorkTitle>How It Works</WorkTitle>
      <WorkSteps>
        <StepCard>
          <StepIcon><FaClipboardCheck /></StepIcon>
          <StepDescription>Take the Survey</StepDescription>
        </StepCard>
        <StepCard>
          <StepIcon><FaLightbulb /></StepIcon>
          <StepDescription>Get Personalized Insights</StepDescription>
        </StepCard>
        <StepCard>
          <StepIcon><FaCompass /></StepIcon>
          <StepDescription>Discover Careers Aligned with Your Ikigai</StepDescription>
        </StepCard>
      </WorkSteps>
    </WorkContainer>
  );
};

export default WorkSec;
