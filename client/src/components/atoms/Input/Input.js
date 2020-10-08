import React from "react";
import styled, { css } from "styled-components";

import withContext from "hoc/withContext";

// import magnifierIcon from 'assets/icons/magnifier.svg';

const StyledInput = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: 0.5px solid ${({ theme }) => theme.grey300};
  border-radius: 50px;

  margin-top: 20px;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}
`;

const Input = ({ search, handleSearch }) => (
  <StyledInput
    search
    type="text"
    name="search"
    placeholder="search"
    value={search}
    onChange={handleSearch}
  />
);

// const mapDispatchToProps = (dispatch) => ({
//   filterItems: (itemType, title) =>
//     dispatch(filterItemsAction(itemType, title)),
// });

// export default connect(null, mapDispatchToProps)(withContext(Input));
export default withContext(Input);
