import React from "react";
import { BadgeContainer, BadgeText, NextButton, ConfettiEffect } from "./AchieveElement";

const AchievementBadge = ({ sectionName, onNext }) => {
  return (
    <BadgeContainer>
      <ConfettiEffect />
      <BadgeText>
        🎉 Congratulations on completing <strong>{sectionName}</strong>! 🎉
      </BadgeText>
      <NextButton onClick={onNext}>Proceed to Next Section</NextButton>
    </BadgeContainer>
  );
};

export default AchievementBadge;