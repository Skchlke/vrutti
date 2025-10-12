import React from 'react';
import { 
  IkigaiContainer, 
  TextSection, 
  VideoSection, 
  Title, 
  Subtitle, 
  VideoWrapper 
} from './ikigaiElement';

// Importing the video file
import ikigaiVideo from '../../videos/ikigai.mp4';

const Ikigai = () => {
  return (
    <IkigaiContainer>
      {/* Left Section - Text */}
      <TextSection>
        <Title>What is Ikigai?</Title>
        <Subtitle>
          Ikigai is the Japanese philosophy that guides individuals to find their true purpose in life by aligning their passions, missions, professions, and vocations.
        </Subtitle>
        <Subtitle>
          <strong>Ikigai is found at the intersection of four elements:</strong>
          <ul>
            <li><strong>Passion</strong> - What you love</li>
            <li><strong>Mission</strong> - What the world needs</li>
            <li><strong>Profession</strong> - What you are good at</li>
            <li><strong>Vocation</strong> - What you can be paid for</li>
          </ul>
          <strong>When these four elements align, you discover your Ikigai — a meaningful and purpose-driven life.</strong>
        </Subtitle>
       
      </TextSection>

      {/* Right Section - Video */}
      <VideoSection>
        <VideoWrapper>
          <video width="100%" height="auto" controls>
            <source src={ikigaiVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoWrapper>
      </VideoSection>
    </IkigaiContainer>
  );
};

export default Ikigai;
