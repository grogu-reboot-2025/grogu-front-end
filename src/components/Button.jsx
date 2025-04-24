import styled from "styled-components";

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: bold;
  border: none;
  border-radius: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  background-color: ${({ theme, variant }) =>
    variant === "secondary" ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  text-align: center;
  width: 80%; // Full width for mobile-first design

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: auto; // Revert to auto width for larger screens
  }
`;

export default Button;
