import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import articleIcon from "assets/icons/article.svg";
import logoutIcon from "assets/icons/logout.svg";
import penIcon from "assets/icons/pen.svg";
import projectIcon from "assets/icons/project.svg";
import logoIcon from "assets/icons/head.svg";
import withContext from "hoc/withContext";
import "./Sidebar.css";

const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.note};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 99999999;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;

  @media (min-width: 850px) {
    display: flex !important;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transform: translateX(0);
  }
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLinks = styled.li`
  margin: 10px 0;
`;
let sidebarClasses = "";
const Sidebar = ({ appContext, closeSidebarFn, isOpen }) => (
  (sidebarClasses = isOpen ? "sidebar open" : "sidebar"),
  (
    <StyledWrapper
      activeColor={appContext}
      onClick={closeSidebarFn}
      className={sidebarClasses}
    >
      <StyledLogoLink to="/" />
      <StyledLinksList>
        <StyledLinks>
          <ButtonIcon
            as={NavLink}
            to="/notes"
            icon={penIcon}
            activeclass="active"
          />
        </StyledLinks>
        <StyledLinks>
          <ButtonIcon
            as={NavLink}
            to="/devarticles"
            icon={articleIcon}
            activeclass="active"
          />
        </StyledLinks>
        <StyledLinks>
          <ButtonIcon
            as={NavLink}
            to="/devprojects"
            icon={projectIcon}
            activeclass="active"
          />
        </StyledLinks>
      </StyledLinksList>
      <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
    </StyledWrapper>
  )
);

Sidebar.propTypes = {
  appContext: PropTypes.oneOf(["notes", "devarticles", "devprojects"]),
  isVisible: PropTypes.bool,
};

Sidebar.defaultProps = {
  appContext: "notes",
  isVisible: false,
};

export default withContext(Sidebar);
