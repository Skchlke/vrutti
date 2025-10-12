import styled from 'styled-components';

export const AssessmentWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;
export const QuestionCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
`;

export const ProgressBar = styled.div`
  width: 80%;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
`;

export const NextButton = styled.button`
  margin-top: 20px;
  background: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
