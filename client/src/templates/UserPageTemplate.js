import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Sidebar from "components/organisms/Siedebar/Sidebar";
import Backdrop from "components/organisms/Backdrop/Backdrop";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import withContext from "hoc/withContext";
import menuIcon from "assets/icons/menu.svg";

const StyledWrapper = styled.div`
  @media (min-width: 850px) {
    padding-left: 150px;
  }
`;
const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.note};
  position: fixed;
  z-index: 999999;
  width: 120px;
  border-radius: 5px;

  @media (min-width: 850px) {
    display: none;
  }
`;

class UserPageTemplate extends Component {
  state = {
    isSidebarOpen: false,
    displayitem: "none",
  };

  menuClicked = () => {
    console.log("works");
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
      displayitem: "block",
    }));
  };
  closeSidebar = () => {
    this.setState({
      isSidebarOpen: false,
      displayitem: "none",
    });
  };

  render() {
    let backdrop;
    if (this.state.isSidebarOpen) {
      backdrop = (
        <Backdrop
          click={this.closeSidebar}
          style={{ display: this.state.displayitem }}
        />
      );
    }

    const { children, appContext } = this.props;
    const { isSidebarOpen } = this.state;
    console.log(isSidebarOpen);
    return (
      <StyledWrapper>
        <StyledButtonIcon
          icon={menuIcon}
          activeColor={appContext}
          onClick={this.menuClicked}
        />
        <Sidebar closeSidebarFn={this.closeSidebar} isOpen={isSidebarOpen} />
        {children}
        {backdrop}
      </StyledWrapper>
    );
  }
}

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default withContext(UserPageTemplate);
