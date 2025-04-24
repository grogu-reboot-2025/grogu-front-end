import styled from 'styled-components';
import { Text } from './Typography';



const FooterWrapper = styled.footer`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  text-align: center;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Text>&copy; Team Grogu. Reboot 2025</Text>
    </FooterWrapper>
  );
};

