import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 500;
  color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.white : theme.colors.text};
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.primary : theme.colors.secondary};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.primaryHover : theme.colors.secondaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
`;

export const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
