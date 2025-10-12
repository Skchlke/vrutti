import React, { useState } from 'react';
import {
  SurveyContainer,
  SurveyForm,
  SurveyLabel,
  SurveyInput,
  SurveyButton,
  ProgressTracker,
  ResultsContainer,
  ResultItem,
} from './SurveySectionElements';

const SurveySection = () => {
  const [progress, setProgress] = useState(0); // Progress percentage
  const [surveyData, setSurveyData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // Flag to show results

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSurveyData({ ...surveyData, [name]: value });
    setProgress((prev) => Math.min(prev + 25, 100)); // Increment progress
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show results after submission
    console.log('Survey Data:', surveyData);
  };

  return (
    <SurveyContainer>
      <h2>Take the Survey</h2>
      <ProgressTracker>Progress: {progress}%</ProgressTracker>
      <SurveyForm onSubmit={handleSubmit}>
        <SurveyLabel>What do you love?</SurveyLabel>
        <SurveyInput type="text" name="love" onChange={handleInputChange} />

        <SurveyLabel>What are you good at?</SurveyLabel>
        <SurveyInput type="text" name="skills" onChange={handleInputChange} />

        <SurveyLabel>What can you be paid for?</SurveyLabel>
        <SurveyInput type="text" name="paidFor" onChange={handleInputChange} />

        <SurveyLabel>What does the world need?</SurveyLabel>
        <SurveyInput type="text" name="needs" onChange={handleInputChange} />

        <SurveyButton type="submit">Submit</SurveyButton>
      </SurveyForm>

      {isSubmitted && (
        <ResultsContainer>
          <h2>Your Ikigai Results</h2>
          <ResultItem><strong>Passion:</strong> {surveyData.love || 'Not answered'}</ResultItem>
          <ResultItem><strong>Mission:</strong> {surveyData.needs || 'Not answered'}</ResultItem>
          <ResultItem><strong>Profession:</strong> {surveyData.paidFor || 'Not answered'}</ResultItem>
          <ResultItem><strong>Vocation:</strong> {surveyData.skills || 'Not answered'}</ResultItem>
        </ResultsContainer>
      )}
    </SurveyContainer>
  );
};

export default SurveySection;
