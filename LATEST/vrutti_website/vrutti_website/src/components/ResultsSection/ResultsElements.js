import styled from "styled-components";

export const ResultContainer = styled.div`
  background: #f8f9fa;
  border: 2px solid #ced4da;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #495057;
  margin-bottom: 20px;
`;

export const AnswerList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    font-size: 16px;
    color: #343a40;
    margin: 5px 0;
  }
`;

export const RestartButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d33f49;
  }
`;
