import React, { useState } from "react";
import QuizSection from "./components/QuizSection";
import ProgressTracker from "./components/ProgressTracker";
import AchievementBadge from "./components/AchievementBadge";
import Result from "./components/Result";
import formConfig from "./utils/formConfig";

const Assessment = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleSectionComplete = (answers) => {
    setUserAnswers((prev) => ({
      ...prev,
      [formConfig.sections[currentSectionIndex].name]: answers,
    }));
    setShowBadge(true);
  };

  const proceedToNextSection = () => {
    setShowBadge(false);
    if (currentSectionIndex < formConfig.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentSectionIndex(0);
    setShowBadge(false);
    setShowResult(false);
    setUserAnswers({});
  };

  return (
    <div>
      {showResult ? (
        <Result
          userAnswers={userAnswers}
          formConfig={formConfig}
          onRestart={restartQuiz}
        />
      ) : (
        <>
          <ProgressTracker
            currentStep={currentSectionIndex}
            totalSteps={formConfig.sections.length}
          />
          {showBadge ? (
            <AchievementBadge
              sectionName={formConfig.sections[currentSectionIndex].name}
              onNext={proceedToNextSection}
            />
          ) : (
            <QuizSection
              section={formConfig.sections[currentSectionIndex]}
              onSectionComplete={handleSectionComplete}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Assessment;
