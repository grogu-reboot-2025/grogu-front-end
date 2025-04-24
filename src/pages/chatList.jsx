import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import { styled } from '@mui/system';
import { useSavedCards } from "../context/SavedCardsContext";

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
const MatchListItem = ({ avatarSrc, name, tagline }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chat');
  };

  return (
    <MatchCard onClick={handleClick}>
      <Media component="img" image={avatarSrc} alt={name} />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight={600}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {tagline || "Online now"}
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
              avatarSrc={card.ImagePath}
              name={card.title}
              tagline={card.description || "Available now"}
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
