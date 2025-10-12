import React, { useState } from "react";
import TabElement from "../components/Tab";
import styled from "styled-components";
import formConfig from "../utils/formConfig";
import Section from "../components/Section";
import { useNavigate } from 'react-router-dom';

const AssesWrapper = styled.div`
  padding: 20px;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const NavigationButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const Asses = () => {
  const [responses, setResponses] = useState({});
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Function to handle user responses
  const handleAnswerChange = (sectionTitle, questionText, answer) => {
    setResponses((prev) => ({
      ...prev,
      [sectionTitle]: {
        ...prev[sectionTitle],
        [questionText]: answer,
      },
    }));
  };

  // Tabs data for TabElement
  const tabsData = formConfig.sections.map((section) => ({
    label: section.title,
    content: (
      <Section
        sectionTitle={section.title}
        questions={section.questions}
        onAnswer={(question, answer) => handleAnswerChange(section.title, question, answer)}
      />
    ),
  }));

  // Inside your component
const navigate = useNavigate();

const handleSubmit = async () => {
  console.log("Submitting Responses:", responses);

  try {
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responses), // Send the collected responses
    });

    const resultData = await response.json(); // Store the parsed data
    navigate('/result', { state: { resultData } });// Simple redirect without state
  } catch (error) {
    console.error("Error submitting responses:", error);
    alert("Failed to submit responses. Please try again later.");
  }
};

  return (
    <AssesWrapper>
      <h1>Questionnaire</h1>
      <TabElement
        tabs={tabsData}
        activeTabIndex={activeTabIndex}
        onTabChange={(index) => setActiveTabIndex(index)}
      />

      {/* Navigation Buttons */}
      {activeTabIndex < tabsData.length - 1 ? (
        <NavigationButton onClick={() => setActiveTabIndex((prev) => prev + 1)}>
          Next Section
        </NavigationButton>
      ) : (
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      )}

      {activeTabIndex > 0 && (
        <NavigationButton onClick={() => setActiveTabIndex((prev) => prev - 1)}>
          Previous Section
        </NavigationButton>
      )}
    </AssesWrapper>
  );
};

export default Asses;
