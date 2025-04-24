import React, { useEffect } from "react";
import { Heading } from "../components/Typography";
import { animated } from "react-spring";
import useFadeInOnLoad from "../hooks/useFadeInOnLoad";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material"; // Using Material UI for some extra styling

export const SplashScreen = () => {
  const fadeIn = useFadeInOnLoad();
  const navigate = useNavigate();

  useEffect(() => {
    const time = setTimeout(() => {
      navigate("/user");
    }, 2500);
    return () => clearTimeout(time);
  }, [navigate]);

  return (
    <animated.div style={fadeIn}>
      {/* Container with centered content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Heading
          sx={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#4caf50', // Cash Cupid color or theme color
            marginBottom: 2,
          }}
        >
          Cash Cupid
        </Heading>
        
        {/* Tagline below the Heading */}
        <Typography
          variant="h6"
          sx={{
            color: '#757575', // Light gray text
            fontStyle: 'italic',
            marginBottom: 3,
            maxWidth: '80%',
            margin: '0 auto',
          }}
        >
          Swipe to discover products tailored just for you! Find what you love with ease.
        </Typography>

        {/* Add additional content */}
        <Typography
          variant="body1"
          sx={{
            color: '#333',
            fontSize: '1rem',
            marginBottom: 4,
            maxWidth: '80%',
            margin: '0 auto',
          }}
        >
        </Typography>
      </Box>
    </animated.div>
  );
};
