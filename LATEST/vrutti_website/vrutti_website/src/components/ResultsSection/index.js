import React from "react";
import { ResultContainer, Title, AnswerList, RestartButton } from "./ResultsElements";

const ResultsSection = ({ userAnswers, formConfig, onRestart }) => {
  return (
    <ResultContainer>
      <Title>Your Results</Title>
      {Object.entries(userAnswers).map(([sectionName, answers]) => (
        <div key={sectionName}>
          <h3>{sectionName}</h3>
          <AnswerList>
            {Object.entries(answers).map(([question, answer]) => (
              <li key={question}>
                {question}: <strong>{answer}</strong>
              </li>
            ))}
          </AnswerList>
        </div>
      ))}
      <RestartButton onClick={onRestart}>Restart Quiz</RestartButton>
    </ResultContainer>
  );
};

export default ResultsSection;
