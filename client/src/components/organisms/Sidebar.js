import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import penIcon from 'assets/icons/pen.svg';
import projectIcon from 'assets/icons/project.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import articleIcon from 'assets/icons/article.svg';
import logoIcon from 'assets/icons/head.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  min-height: 100px;
  background-color: ${({ theme }) => theme.note};
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

const Sidebar = () => (
  <StyledWrapper>
    <StyledLogoLinks to="/" icon={logoIcon} />
    <StyledLinkList>
      <li>
        <ButtonIcon exact as={NavLink} to="/" icon={penIcon} activeClass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/devarticles" icon={articleIcon} activeClass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/devprojects" icon={projectIcon} activeClass="active" />
      </li>
    </StyledLinkList>
    <StyledLogoutButton as={NavLink} to="/login" icon={LogoutIcon} />
  </StyledWrapper>
);

export default Sidebar;
