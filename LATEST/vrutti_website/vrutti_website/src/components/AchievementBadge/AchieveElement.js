// Updated AchievementElement.js
import styled, { keyframes } from "styled-components";

const popAnimation = keyframes`
  0% { transform: scale(0.9); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f9f9f9, #e0c3fc);
  border: 2px solid #a46ded;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  animation: ${popAnimation} 0.6s ease;
`;

export const BadgeText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #5a189a;
  text-align: center;
  margin-bottom: 20px;
`;

export const NextButton = styled.button`
  background-color: #6a0dad;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #4a0072;
    transform: scale(1.05);
  }
`;

export const ConfettiEffect = styled.div`
  width: 60px;
  height: 60px;
  background-image: url("https://cdn-icons-png.flaticon.com/512/3161/3161785.png");
  background-size: cover;
  margin-bottom: 20px;
`;
