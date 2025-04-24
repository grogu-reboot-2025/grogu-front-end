import styled from 'styled-components';
import { Heading } from './Typography';


const HeaderWrapper = styled.header`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Heading>Your Rewards</Heading>
    </HeaderWrapper>
  );
};
