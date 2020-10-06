import React from "react";
import GridTemplate from "templates/GridTemplate";
import { connect } from "react-redux";
import Card from "components/molecules/Card/Card";

const DevProjects = ({ devProjects }) => (
  <GridTemplate pageType="devprojects">
    {devProjects.map(({ title, content, name, created, id }) => (
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
  devProjects: [],
};
const mapStateToProps = (state) => {
  const { devProjects } = state;
  return { devProjects };
};

export default connect(mapStateToProps)(DevProjects);
