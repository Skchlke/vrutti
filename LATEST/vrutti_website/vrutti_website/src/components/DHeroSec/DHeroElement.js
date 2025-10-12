import styled from 'styled-components';

export const SurveySectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f8ff, #e6f7ff);
  min-height: 90vh;
  overflow: hidden;
`;

export const SurveyContent = styled.div`
  flex: 1;
  max-width: 50%;
  padding: 1rem;

  h1 {
    font-size: 2.5rem;
    color: #1a202c;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #718096;
    margin-bottom: 2rem;
  }

  button {
    background-color: #3182ce;
    color: #fff;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2b6cb0;
    }
  }
`;

export const SurveyAnimation = styled.div`
  flex: 1;
  position: relative;
  max-width: 50%;
  height: auto;

  .gsap-animation {
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
  }
`;
