import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";
import Heading from "components/atoms/Heading/Heading";
import withContext from "hoc/withContext";
import { Formik, Form } from "formik";

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
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 40px;
  border-radius: 20px;
  height: 30vh;
`;
const StyledInput = styled(Input)`
  margin-top: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

let d = new Date();
let date = ` ${d.getDate() < 0 ? `0${d.getDate()}` : d.getDate()}/${
  d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
}/${d.getFullYear()}`;

const addItem = (values) => {
  console.log(values);
};
const NewItemBar = ({ isVisible, appContext, handleClose }) => (
  <StyledWrapper isVisible={isVisible} activeColor={appContext}>
    <Heading big>Create new {appContext}</Heading>
    <Formik
      initialValues={{
        title: "",
        content: "",
        articleUrl: "",
        created: date,
        projectName: "",
      }}
      onSubmit={(values) => {
        addItem(values, appContext);
        handleClose();
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <StyledForm>
          <StyledInput
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {appContext === "devprojects" && (
            <StyledInput
              placeholder="responsible person"
              type="text"
              name="projectName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.projectName}
            />
          )}
          {appContext === "devarticles" && (
            <StyledInput
              placeholder="article link"
              type="text"
              name="articleUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
            />
          )}
          <StyledTextArea
            name="content"
            as="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <StyledButton type="submit" activeColor={appContext}>
            Add {appContext}
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
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
