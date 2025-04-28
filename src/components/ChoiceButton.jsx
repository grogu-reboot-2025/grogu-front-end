import React from 'react';
import styled from 'styled-components';

export const ChoiceButton = ({ icon, onClick, isDisabled }) => {
  const renderIcon = () => {
    if (icon === 'cross') return '❌';
    if (icon === 'tick') return '✅';
    return null;
  };

  return (
    <Button onClick={onClick} disabled={isDisabled}>
      {renderIcon()}
    </Button>
  );
};

const Button = styled.button`
  background: none;
  border: none; 
  cursor: pointer;
  margin-left: 8px; 
  margin-right: 8px;
  font-size: 24px; 

  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 60px; 
    height: 60px;
    margin: 12px; 
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 70px; 
    height: 70px;
    margin: 16px; 
  }
`;