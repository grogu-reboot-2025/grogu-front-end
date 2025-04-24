import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useSavedCards } from '../context/SavedCardsContext';
import { GreyedOutCard, SwipeCard } from './Card'; // Reuse SwipeCard from Card.jsx
import { Text } from './Typography';
import { ChoiceButton } from './ChoiceButton';
import styled from 'styled-components';

export const SwipeableCardStack = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tilt, setTilt] = useState(0); // State to track the tilt angle
  const [opacity, setOpacity] = useState(1); // State to track the card's opacity
  const { saveCard } = useSavedCards();

  const handleSwipe = (direction) => {
    if (direction === 'Right') {
      saveCard(data[currentIndex]);
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTilt(0); // Reset tilt after swipe
    setOpacity(1); // Reset opacity after swipe
  };

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      // Adjust tilt and opacity based on swipe delta
      setTilt(eventData.deltaX / 10); // Divide by 10 to reduce sensitivity
      setOpacity(1 - Math.min(Math.abs(eventData.deltaX) / 200, 0.5)); // Reduce opacity as the card is swiped
    },
    onSwipedLeft: () => handleSwipe('Left'),
    onSwipedRight: () => handleSwipe('Right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <CardWrapper {...handlers}>
      <ChoiceButton
        icon="cross"
        onClick={() => handleSwipe('Left')}
        isDisabled={currentIndex >= data.length}
      />
      {currentIndex < data.length ? (
        <SwipeCard style={{ transform: `rotate(${tilt}deg)`, opacity }}>
          <CardImage
            src={`${data[currentIndex].title.replace(/\s+/g, '')}.png`}
            alt={data[currentIndex].title}
          />
          <Text>{data[currentIndex].description}</Text>
        </SwipeCard>
      ) : (
        <GreyedOutCard>
          <h2>No More Cards</h2>
        </GreyedOutCard>
      )}
      <ChoiceButton
        icon="tick"
        onClick={() => handleSwipe('Right')}
        isDisabled={currentIndex >= data.length}
      />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  height: 100%;
  gap: 16px;
`;



const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;
