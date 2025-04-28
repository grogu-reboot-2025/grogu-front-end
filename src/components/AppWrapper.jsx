import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily};
`;

const Main = styled.main`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; // Centers content horizontally
`;

export const AppWrapper = ({ children }) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
};