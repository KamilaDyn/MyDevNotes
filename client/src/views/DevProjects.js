import React from "react";
import GridTemplate from "templates/GridTemplate";
import { connect } from "react-redux";
import Card from "components/molecules/Card/Card";

const DevProjects = ({ devprojects }) => (
  <GridTemplate pageType="devprojects">
    {devprojects.map(({ title, content, name, created, id }) => (
      <Card
        cardType="devprojects"
        title={title}
        content={content}
        name={name}
        created={created}
        key={id}
        id={id}
      />
    ))}
  </GridTemplate>
);

DevProjects.defaulProps = {
  devprojects: [],
};
const mapStateToProps = (state) => {
  const { devprojects } = state;
  return { devprojects };
};

export default connect(mapStateToProps)(DevProjects);
