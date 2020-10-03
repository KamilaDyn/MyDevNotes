import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import penIcon from "assets/icons/pen.svg";
import projectIcon from "assets/icons/project.svg";
import LogoutIcon from "assets/icons/logout.svg";
import articleIcon from "assets/icons/article.svg";
import logoIcon from "assets/icons/head.svg";

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.notes};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLinks = styled(NavLink)`
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

const StyledLinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledLogoLinks to="/" icon={logoIcon} />
    <StyledLinkList>
      <li>
        <ButtonIcon exact as={NavLink} to="/" icon={penIcon} />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/devarticles" icon={articleIcon} />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/devprojects" icon={projectIcon} />
      </li>
    </StyledLinkList>
    <StyledLogoutButton as={NavLink} to="/login" icon={LogoutIcon} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(["notes", "devarticles", "devprojects"]),
};

Sidebar.defaultProps = {
  pageType: "notes",
};
export default Sidebar;
