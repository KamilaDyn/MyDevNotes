import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";
import Heading from "components/atoms/Heading/Heading";
import withContext from "hoc/withContext";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import { addItem as addItemAction } from "actions";

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
  padding: 10px;
  border: 0.5px solid ${({ theme }) => theme.grey300};
`;
const StyledInput = styled(Input)`
  margin-top: 20px;
`;

let d = new Date();
let date = ` ${d.getDate() < 0 ? `0${d.getDate()}` : d.getDate()}/${
  d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
}/${d.getFullYear()}`;

const NewItemBar = ({ appContext, isVisible, addItem, handleClose }) => (
  <StyledWrapper isVisible={isVisible} activeColor={appContext}>
    <Heading big>Create new {appContext}</Heading>
    <Formik
      autoComplete="off"
      initialValues={{
        title: "",
        content: "",
        articleUrl: "",
        name: "",
        created: date,
      }}
      onSubmit={(values, actions) => {
        addItem(appContext, values);
        handleClose();
        actions.resetForm({
          values: {
            title: "",
            content: "",
            articleUrl: "",
            name: "",
            created: date,
          },
        });
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
              placeholder="person responsible"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          )}
          {appContext === "devarticles" && (
            <StyledInput
              placeholder="link"
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
            placeholder="description"
          />
          <Button type="submit" activeColor={appContext}>
            Add Note
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);
NewItemBar.propTypes = {
  appContext: PropTypes.oneOf(["notes", "devarticles", "devprojects"]),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  appContext: "notes",
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) =>
    dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
