import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";

const DevArticles = ({ devarticles }) => (
  <GridTemplate>
    {devarticles.map(({ title, content, articleUrl, created, id }) => (
      <Card
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={id}
        id={id}
      />
    ))}
  </GridTemplate>
);

DevArticles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    })
  ),
};

DevArticles.defaulProps = {
  devarticles: [],
};
const mapStateToProps = (state) => {
  const { devarticles } = state;
  return { devarticles };
};

export default connect(mapStateToProps)(DevArticles);
