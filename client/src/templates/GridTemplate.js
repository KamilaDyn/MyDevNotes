import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import UserPageTemplate from "templates/UserPageTemplate";
import Input from "components/atoms/Input/Input";
import Heading from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import plusIcon from "assets/icons/plus.svg";
import NewItemBar from "components/organisms/NewItemBar/NewItemBar";

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 200px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
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
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.notes};
  background-size: 35%;
  border-radius: 50px;
  z-index: 10000;
`;
class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  handleNewItemBarToggle = () => {
    this.setState((prevState) => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { pageType, children } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <UserPageTemplate pageType={pageType}>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageType}s
            </StyledHeading>
            <StyledParagraph> 6 {pageType}s</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon
            icon={plusIcon}
            activeColor={pageType}
            onClick={this.handleNewItemBarToggle}
          />
          <NewItemBar isVisible={isNewItemBarVisible}></NewItemBar>
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

UserPageTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(["notes", "devarticles", "devprojects"]),
};

UserPageTemplate.defaultProps = {
  pageType: "notes",
};

export default GridTemplate;
