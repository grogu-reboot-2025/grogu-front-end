import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useSavedCards } from '../context/SavedCardsContext';
import { GreyedOutCard, SwipeCard } from './Card';
import { Heading, Text } from './Typography';
import { ChoiceButton } from './ChoiceButton';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Toast } from './Toast'; // Import the Toast component

export const SwipeableCardStack = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tilt, setTilt] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [showToast, setShowToast] = useState(false); // State to control toast visibility
  const [toastMessage, setToastMessage] = useState(''); // State for toast message
  const { saveCard } = useSavedCards();
  const navigate = useNavigate(); // Initialize useNavigate
  const [hasSwipedRight, setHasSwipedRight] = useState(false); // Track if any card was swiped right

  useEffect(() => {
    // Reset currentIndex to 0 when data changes
    setCurrentIndex(0);
  }, [data]); // Ensure we reset the index if the `data` prop changes

  const handleSwipe = (direction) => {
    console.log(`Swiped ${direction}`);
    if (direction === 'Right') {
      console.log(`Card saved: ${data[currentIndex].title}`);
      saveCard(data[currentIndex]);
      setHasSwipedRight(true);
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTilt(0);
    setOpacity(1);
  };


  useEffect(() => {
    if (currentIndex >= data.length) {
      setToastMessage(hasSwipedRight ? "🔥 It's a match!" : "💔 Oh. no matches");
      setShowToast(true);


      setTimeout(() => {
        setShowToast(false);
        navigate("/chatList");
      }, 2000);
    }
  }, [currentIndex, data.length, hasSwipedRight, navigate]);

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      console.log(`Swiping... DeltaX: ${eventData.deltaX}`);
      setTilt(eventData.deltaX / 10); // Set tilt based on swipe delta
      setOpacity(1 - Math.min(Math.abs(eventData.deltaX) / 200, 0.5)); // Adjust opacity as card is swiped
    },
    onSwipedLeft: () => handleSwipe('Left'),
    onSwipedRight: () => handleSwipe('Right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <CardWrapper {...handlers}>
        <ChoiceButton
          icon="cross"
          onClick={() => handleSwipe('Left')}
          isDisabled={currentIndex >= data.length}
        />
        {currentIndex < data.length ? (
          <SwipeCard style={{ transform: `rotate(${tilt}deg)`, opacity }}>
            <CardImage
              src={data[currentIndex].ImagePath}
              alt={data[currentIndex].title}
            />
            <Heading>{data[currentIndex].title}</Heading>
            <Text>{data[currentIndex].description}</Text>
          </SwipeCard>
        ) : (
          <GreyedOutCard>
            <h2>You've reaches the end of your Products</h2>
          </GreyedOutCard>
        )}
        <ChoiceButton
          icon="tick"
          onClick={() => handleSwipe('Right')}
          isDisabled={currentIndex >= data.length}
        />
      </CardWrapper>
      <Toast message={toastMessage} isVisible={showToast} />
    </>
  );
};

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 16px;
`;

const CardImage = styled.img`
width: 150px;
  height: 150px;
  border-radius: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;
