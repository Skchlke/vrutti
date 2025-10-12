import styled from 'styled-components';

export const QuestionContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const QuestionLabel = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

export const AnswerOptions = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const AnswerOption = styled.div`
  margin: 5px 0;
`;

export const AnswerInput = styled.input`
  margin-right: 10px;
`;
