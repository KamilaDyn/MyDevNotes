import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserPageTemplate from "templates/UserPageTemplate";
import Button from "components/atoms/Button/Button";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Heading from "components/atoms/Heading/Heading";
import withContext from "hoc/withContext";

const StyledWrapper = styled.div`
  padding: 40px 30px 25px 70px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
  backgound-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : "white"};
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 20px 0;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.red};
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledButton = styled(Button)`
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.notes};
`;

const DetailsTemplate = ({
  appContext,
  title,
  created,
  content,
  articleUrl,
  name,
}) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          {title}
        </StyledHeading>
        <StyledParagraph>{created}</StyledParagraph>
      </StyledPageHeader>
      <Paragraph>{content}</Paragraph>
      {appContext === "devarticles" && (
        <StyledLink href={articleUrl} target="_blank">
          Open article
        </StyledLink>
      )}
      {appContext === "devprojects" && (
        <StyledParagraph>
          Person who is responsible for projects: {name}
        </StyledParagraph>
      )}
      <StyledButton as={Link} to={`/${appContext}`}>
        save / close
      </StyledButton>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  appContext: PropTypes.oneOf(["notes", "devarticles", "devprojects"])
    .isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: "",
  created: "",
  content: "",
  articleUrl: "",
};
export default withContext(DetailsTemplate);
