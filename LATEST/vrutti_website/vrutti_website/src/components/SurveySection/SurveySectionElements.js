import styled from 'styled-components';

export const SurveyContainer = styled.div`
  padding: 30px;
  min-height: 100vh;
  background-color: #fff;
`;

export const ProgressTracker = styled.div`
  margin-bottom: 15px;
  font-size: 1rem;
  color: #555;
`;

export const SurveyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SurveyLabel = styled.label`
  font-size: 1.2rem;
  color: #333;
`;

export const SurveyInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const SurveyButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;

  &:hover {
    background-color: #218838;
  }
`;

export const ResultsContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ResultItem = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
`;
