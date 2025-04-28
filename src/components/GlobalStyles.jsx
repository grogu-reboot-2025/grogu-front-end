import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh; 
    width: 100%;
    overflow-x: hidden; 

    @media (max-width: 768px) {
      min-height: 100dvh; 
    }
  }

  body {
    font-family: 'Inter', sans-serif; 
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  #root {
    min-height: 100vh; 
    @media (max-width: 768px) {
      min-height: 100dvh; 
    }
  }
`;