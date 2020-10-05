import styled, { css } from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.red};
      cursor: pointer;
    `}
`;

export default Paragraph;
