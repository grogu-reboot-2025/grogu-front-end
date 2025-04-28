import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    primary: '#11b67a',
    primaryHover: '#0e9a63',
    secondary: '#808080',
    secondaryHover: '#6e6e6e',
    white: '#ffffff',
    text: '#333333',
    disabled: '#cccccc',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  fontSizes: {
    small: '12px',
    medium: '14px',
    large: '16px',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export const AppThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default theme;