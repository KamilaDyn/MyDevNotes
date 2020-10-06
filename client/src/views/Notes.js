import React from "react";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";
import { connect } from "react-redux";

const Notes = ({ notes }) => (
  <GridTemplate>
    {notes.map(({ title, content, created, id }) => (
      <Card
        cardType="notes"
        title={title}
        content={content}
        created={created}
        id={id}
        key={id}
      />
    ))}
  </GridTemplate>
);

Notes.defaulProps = {
  devArticles: [],
};
const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
