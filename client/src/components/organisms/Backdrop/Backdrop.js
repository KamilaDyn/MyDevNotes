import React from "react";
import styled from "styled-components";

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  top: 0;
  left: 0;

  @media (min-width: 850px) {
    display: none !important;
  }
`;

const Backdrop = ({ click, ...props }) => (
  <>
    <StyledBackdrop onClick={click} {...props} />
  </>
);

export default Backdrop;
