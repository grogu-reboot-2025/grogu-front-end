import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#11b67a', // Lloyds green
    secondary: '#006a4d', // Darker green for secondary elements
    background: '#F1f1f1', // off white for background
    text: '#000000', // black for text
    critical: '#db0f30', // red
    warning: '#e66d00', // orange
    success: '#10a870', // green
    info: '#276ae6', // blue
    white: '#ffffff', // white for backgrounds and elements
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