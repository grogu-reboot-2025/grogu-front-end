import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh; // Default for desktop and larger screens
    width: 100%;
    overflow-x: hidden; // Prevent horizontal scrolling

    @media (max-width: 768px) {
      min-height: 100dvh; // Use 100dvh for mobile devices
    }
  }

  body {
    font-family: 'Inter', sans-serif; 
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  #root {
    min-height: 100vh; // Default for desktop
    @media (max-width: 768px) {
      min-height: 100dvh; // Use 100dvh for mobile devices
    }
  }
`;