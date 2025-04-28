import React, { useEffect } from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import useFadeInOnLoad from "../hooks/useFadeInOnLoad";
import { useNavigate } from "react-router-dom";

const SplashScreenContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Logo = styled.div`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const SplashHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Tagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  max-width: 80%;
`;

const AdditionalText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  max-width: 80%;
`;

export const SplashScreen = () => {
  const fadeIn = useFadeInOnLoad();
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/user");
    }, 2500);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <SplashScreenContainer style={fadeIn}>
      <Logo>💸</Logo>
      <SplashHeading>Cash Cupid</SplashHeading>
      <Tagline>
        Swipe to discover products tailored just for you! Find what you love with ease.
      </Tagline>
      <AdditionalText></AdditionalText>
    </SplashScreenContainer>
  );
};
