import styled from 'styled-components';

export const IkigaiContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #e6f2f8, #f9fafd); /* Light blue gradient */
  min-height: 100vh;
`;

export const TextSection = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 600px;
`;

export const VideoSection = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 600px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #30475e; /* Deep blue-gray for a professional look */
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  text-align: left;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 15px;
  line-height: 1.8;
  color: #4a6572; /* Muted blue-gray for readability */
  background: #ffffff; /* White box for focus */
  padding: 15px 20px;
  border-radius: 8px;
  border-left: 5px solid #f05454; /* Accent border for emphasis */
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

export const VideoWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Slight depth */
  border: 3px solid #f05454; /* Matching accent color */
`;
