import styled from 'styled-components';

export const CareerSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background: linear-gradient(135deg, #f8f8ff, #d3e4ff);
  min-height: 100vh;
`;

export const SplitSection = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`;

export const TextSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AnimationSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #30475e; /* Deep blue-gray for a professional look */
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  text-align: left;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 15px;
  line-height: 1.8;
  color: #4f5d75;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
`;

export const AnimationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const AnimationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnimationLabel = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  color: #555;
`;
