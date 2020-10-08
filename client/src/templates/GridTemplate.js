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
import withContext from "hoc/withContext";
import { connect } from "react-redux";
import { filterItems as filterItemsAction } from "actions";

const StyledWrapper = styled.div`
  padding: 25px;
  @media (min-width: 850px) {
    padding: 25px 150px 25px 70px;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 85px;

  @media (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
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
    search: "",
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value.substr(0, 20) });
  };

  handleNewItemBarToggle = () => {
    this.setState((prevState) => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { appContext, children, filterItems } = this.props;
    const { isNewItemBarVisible } = this.state;
    // const filteredItems = filterItems(appContext);
    // console.log(filteredItems); // add map fn

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input {...this.state} handleSearch={this.handleSearch} />
            <StyledHeading big as="h1">
              {appContext}
            </StyledHeading>
            <StyledParagraph>
              <span>{children.length}</span> {appContext}
            </StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon
            icon={plusIcon}
            activeColor={appContext}
            onClick={this.handleNewItemBarToggle}
          />
          <NewItemBar
            handleClose={this.handleNewItemBarToggle}
            isVisible={isNewItemBarVisible}
          />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  appContext: PropTypes.oneOf(["notes", "devarticles", "devprojects"]),
};

GridTemplate.defaultProps = {
  appContext: "notes",
};

const mapDispatchToProps = (dispatch) => ({
  filterItems: (itemType, title) =>
    dispatch(filterItemsAction(itemType, title)),
});

export default connect(null, mapDispatchToProps)(withContext(GridTemplate));
