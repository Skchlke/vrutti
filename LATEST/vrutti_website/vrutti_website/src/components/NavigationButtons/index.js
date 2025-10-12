import React from 'react';
import { ButtonWrapper, NavButton } from './NavBtnElements';

const NavigationButtons = ({ onPrevious, onNext, onSubmit, isLastQuestion }) => {
  return (
    <ButtonWrapper>
      <NavButton onClick={onPrevious} disabled={!onPrevious}>
        Previous
      </NavButton>
      {isLastQuestion ? (
        <NavButton onClick={onSubmit} primary>
          Submit
        </NavButton>
      ) : (
        <NavButton onClick={onNext} primary>
          Next
        </NavButton>
      )}
    </ButtonWrapper>
  );
};

export default NavigationButtons;
