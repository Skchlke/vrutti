import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const WorkContainer = styled.div`
  padding: 60px 20px;
  background: linear-gradient(135deg, #f7f7ff, #c3dbf2);
  text-align: center;
`;

export const WorkTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #2d4059;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const WorkSteps = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

export const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  animation: ${fadeIn} 0.5s ease-out both;
`;

export const StepIcon = styled.div`
  font-size: 50px;
  color: #2f855a;
  margin-bottom: 15px;
`;

export const StepDescription = styled.p`
  font-size: 18px;
  color: #4f5d75;
  text-align: center;
  max-width: 160px;
`;
