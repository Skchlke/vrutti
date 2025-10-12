import React from "react";
import styled from "styled-components";
import QuestionElement from "../Question";

const SectionWrapper = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const Section = ({ sectionTitle, questions, onAnswer }) => {
  return (
    <div>
      <h2>{sectionTitle}</h2>
      {questions.map((question, index) => (
        <QuestionElement
          key={index}
          question={question}
          onAnswer={(answer) => onAnswer(question.text, answer)}
        />
      ))}
    </div>
  );
};

export default Section;
