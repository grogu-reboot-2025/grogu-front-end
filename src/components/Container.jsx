import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px; // Keep max-width as is
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;

export default Container;