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

    ${({ close }) =>
      close &&
      css`
        padding: 25px;
        background-color: ${({ activeColor, theme }) =>
          activeColor ? theme[activeColor] : theme.notes};
        width: 50px;
        height: 50px;
        position: relative;
        margin-left: 88%;
        top: -10px;

        :after {
          content: "";
          height: 40px;
          border-left: 2px solid #ccc;
          position: absolute;
          transform: rotate(45deg);
          left: 25px;
          top: 5px;
        }

        :before {
          content: "";
          height: 40px;
          border-left: 2px solid #ccc;
          position: absolute;
          transform: rotate(-45deg);
          left: 25px;
          top: 5px;
        }
      `}
`;

export default Button;
