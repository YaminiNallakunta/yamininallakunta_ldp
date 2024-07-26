import React from 'react';
import styled from 'styled-components';


interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode; 
  color?: string;
}

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; // Add some space between icon and text
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
`;

const Button: React.FC<ButtonProps> = ({ children, icon }) => (
  <StyledButton>
    {icon && <span>{icon}</span>} 
    {children}
  </StyledButton>
);

export default Button;
