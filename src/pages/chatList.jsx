import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import { styled } from '@mui/system';
import { useSavedCards } from "../context/SavedCardsContext";
import { useLocation } from 'react-router-dom';

// Styled components
const MatchCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  transition: 'transform 0.2s ease',
  cursor: 'pointer',
  maxWidth: 500,
  width: '100%',
  margin: '0 auto',
  '&:hover': {
    transform: 'scale(1.01)',
  },
}));

const Media = styled(CardMedia)`
  width: 120px;
  height: 100%;
  object-fit: cover;
`;

// Single rectangular match card
const MatchListItem = ({ card }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chat', { state: card }); // Pass the entire card data
  };

    // Handler for keyboard interactions (Enter or Space)
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault(); // Prevents the default space scrolling behavior
          handleClick(); // Triggers the same action as onClick
        }
      };

  return (
    <MatchCard 
  onClick={handleClick} 
  tabIndex={0}
  onKeyDown={handleKeyDown} // Listen for keydown events
  role="button" // Describes the element as a button
  aria-label={`Go to chat with ${name}`} // Optional: Improve screen reader usability
>

<Media component="img" image={card.ImagePath} alt={card.title} />
<CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight={600}>
          {card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.description || "Available now"}
        </Typography>
      </CardContent>
    </MatchCard>
  );
};

// Main stacked list with title
export const ChatList = () => {
  const { savedCards } = useSavedCards();

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
        <Typography variant="h5" fontWeight={600}>
          Your Matches
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Click on a match to learn more about the product
        </Typography>
      </Box>

      <Stack spacing={2} sx={{ width: '100%', maxWidth: 500 }}>
        {savedCards.length > 0 ? (
          savedCards.map((card, index) => (
            <MatchListItem
              key={index}
              card={card} // Pass the entire card object
            />
          ))
        ) : (
          <Typography variant="body1" sx={{ padding: 2, textAlign: 'center', color: 'text.secondary' }}>
            No matches yet. Start saving some!
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

// Chat component to display card data
const Chat = () => {
  const location = useLocation();
  const card = location.state; // Get the entire card object passed in the state

  if (!card) {
    return <div>No card data available</div>; // Handle case where no card was passed
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" fontWeight={600}>
        Chat with {card.title}
      </Typography>
      <img src={card.ImagePath} alt={card.title} style={{ width: '100%', maxWidth: 500, borderRadius: '8px' }} />
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        {card.description || "No description available"}
      </Typography>
      {/* Add more chat functionality here */}
    </Box>
  );
};

export default Chat;
