import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const PillButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px; 
  font-size: 14px; 
  border-radius: 50px; 
  width: 140px; 
  height: 40px; 
  margin: 8px; 
  transition: 

  &:hover {
    transform: scale(1.05); 
  }

  span {
    white-space: nowrap; 
    overflow: hidden; 
  }
`;

export const TopicsButton = ({ topics, checkedStates, handleToggle }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {topics.map((topic) => (
        <PillButton
          key={topic}
          variant={checkedStates[topic] ? 'primary' : 'secondary'}
          onClick={() => handleToggle(topic)}
        >
          <span>
            {topic} {checkedStates[topic] ? '✓' : '+'}
          </span>
        </PillButton>
      ))}
    </div>
  );
};