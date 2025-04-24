import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#646cff',
    secondary: '#535bf2',
    background: '#ffffff',
    text: '#213547',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
  fontSizes: {
    small: '14px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
};

export const AppThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default theme;