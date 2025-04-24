import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh; // Ensure the app fits the viewport height
    width: 100%;
    overflow-x: hidden; // Prevent horizontal scrolling
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  #root {
    min-height: 100vh; // Ensure the app container fills the viewport
  }
`;