import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useSavedCards } from '../context/SavedCardsContext';
import { useNavigate } from 'react-router-dom';
import { Toast } from './Toast';
import { ChoiceButton } from './ChoiceButton'; // Use the imported ChoiceButton
import styled from 'styled-components';

export const SwipeableCardStack = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tilt, setTilt] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [matchCount, setMatchCount] = useState(0); // Track the number of matches
  const { saveCard } = useSavedCards();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentIndex(0);
    setMatchCount(0); // Reset match count when data changes
  }, [data]);

  const handleSwipe = (direction) => {
    if (direction === 'Right') {
      saveCard(data[currentIndex]);
      setMatchCount((prevCount) => prevCount + 1); // Increment match count
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTilt(0);
    setOpacity(1);
  };

  useEffect(() => {
    if (currentIndex >= data.length) {
      setToastMessage(
        matchCount > 0 ? `🔥 You have ${matchCount} match${matchCount > 1 ? 'es' : ''}!` : '💔 No matches'
      );
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
        navigate('/chatList');
      }, 2000);
    }
  }, [currentIndex, data.length, matchCount, navigate]);

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      setTilt(eventData.deltaX / 10); // Add tilt effect
      setOpacity(1 - Math.min(Math.abs(eventData.deltaX) / 200, 0.5)); // Adjust opacity
    },
    onSwipedLeft: () => handleSwipe('Left'),
    onSwipedRight: () => handleSwipe('Right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <SwipeContainer {...handlers}>
      {currentIndex < data.length ? (
        <CardWrapper>
          <ChoiceButton icon="cross" onClick={() => handleSwipe('Left')} />
          <Card style={{ transform: `rotate(${tilt}deg)`, opacity }}>
            <CardImage
              src={data[currentIndex].ImagePath}
              alt={data[currentIndex].title}
              draggable="false" // Prevent dragging
            />
            <CardTitle>{data[currentIndex].title}</CardTitle>
            <CardDescription>{data[currentIndex].description}</CardDescription>
          </Card>
          <ChoiceButton icon="tick" onClick={() => handleSwipe('Right')} />
        </CardWrapper>
      ) : (
        showToast && (
          <Toast
            message={toastMessage}
            isVisible={showToast}
            matchCount={matchCount} // Pass the correct match count
          />
        )
      )}
    </SwipeContainer>
  );
};

const SwipeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.medium}; /* Add spacing between buttons and card */
  flex-wrap: nowrap; /* Ensure buttons and card stay on the same line */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-wrap: nowrap; /* Prevent wrapping on smaller screens */
    gap: ${({ theme }) => theme.spacing.small}; /* Reduce spacing on smaller screens */
  }
`;

const Card = styled.div`
  width: 90%; /* Adjust width for responsiveness */
  max-width: 300px; /* Ensure it doesn't exceed the original size */
  height: 400px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing.medium};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.medium};
  text-align: center;
  transition: transform 0.2s ease, opacity 0.2s ease; /* Smooth tilt and opacity transition */
`;

const CardImage = styled.img`
  width: 90%; /* Adjust image size to fit within the card */
  height: auto;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  pointer-events: none; /* Prevent interaction with the image */
`;

const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};
`;

const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
`;

const ToastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 90%; /* Adjust width for responsiveness */
  max-width: 300px; /* Ensure it doesn't exceed the original size */
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing.medium};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
