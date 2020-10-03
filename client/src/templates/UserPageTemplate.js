import React from "react";
import PropTypes from "prop-types";
import Sidebar from "components/organisms/Siedebar/Sidebar";

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  pageType: PropTypes.oneOf(["notes", "devarticles", "devprojects"]),
};

UserPageTemplate.defaultProps = {
  pageType: "notes",
};

export default UserPageTemplate;
