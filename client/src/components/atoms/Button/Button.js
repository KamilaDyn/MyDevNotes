import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.notes};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ activeColor, theme }) =>
        activeColor ? theme[activeColor] : theme.notes};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      background-color: ${({ activeColor, theme }) =>
        activeColor ? theme[activeColor] : theme.notes};
      width: 120px;
      height: 35px;
      font-size: 10px;
    `}
`;

export default Button;
