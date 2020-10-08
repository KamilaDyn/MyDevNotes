import React from "react";
import styled from "styled-components";
import Heading from "components/atoms/Heading/Heading";
import { Link } from "react-router-dom";
import Paragraph from "components/atoms/Paragraph/Paragraph";

const StyledWraper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoginPage = () => (
  <StyledWraper>
    <Heading>Nothing here yet. In progress.....</Heading>
    <Paragraph as={Link} to="/">
      Go back to main page
    </Paragraph>
  </StyledWraper>
);

export default LoginPage;
