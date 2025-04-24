import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; // Ensures the app fits exactly within the viewport
  width: 100vw; // Ensures the app fits exactly within the viewport
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily};
`;

const Main = styled.main`
  flex: 1; // Ensures the main content fills the remaining space between the header and footer
  display: flex;
  flex-direction: column;
  justify-content: center; // Centers content vertically
  align-items: center; // Centers content horizontally

`;

export const AppWrapper = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};