import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";
import Heading from "components/atoms/Heading/Heading";
import withContext from "hoc/withContext";

const StyledWrapper = styled.div`
  border-left: 10px solid
    ${({ activeColor, theme }) =>
      activeColor ? theme[activeColor] : theme.notes};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;
const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const NewItemBar = ({ appContext, isVisible }) => (
  <StyledWrapper activeColor={appContext} isVisible={isVisible}>
    <Heading>Create new {appContext} </Heading>
    <Input placeholder="title" />
    {appContext === "devarticles" && <StyledInput placeholder="link" />}
    <StyledTextArea
      as="textarea"
      placeholder={appContext === "devprojects" ? "name of project" : "title"}
    />
    <Button activeColor={appContext}>Add {appContext}</Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  appContext: PropTypes.oneOf(["notes", "devarticles", "devprojects"]),
  isVisible: PropTypes.bool,
};

NewItemBar.defaultProps = {
  appContext: "notes",
  isVisible: false,
};
export default withContext(NewItemBar);
