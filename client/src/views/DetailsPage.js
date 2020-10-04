import React, { Component } from "react";
import PropTypes from "prop-types";
import DetailsTemplate from "templates/DetailsTemplate";
import { routes } from "routes";

class DetailsPage extends Component {
  state = {
    pageType: "notes",
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.twitter:
        this.setState({ pageType: "devprojects" });
        break;
      case routes.note:
        this.setState({ pageType: "notes" });
        break;
      case routes.article:
        this.setState({ pageType: "devarticles" });
        break;
      default:
        console.log("Something went wrong with matching paths");
    }
  }

  render() {
    const dummyArticle = {
      id: 1,
      title: "Wake me up when Vue ends",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      articleUrl:
        "https://www.youtube.com/watch?v=sBws8MSXN7A&ab_channel=TraversyMedia",
      created: "1 day",
      name: "me",
    };

    const { pageType } = this.state;

    return (
      <DetailsTemplate
        pageType={pageType}
        title={dummyArticle.title}
        created={dummyArticle.created}
        content={dummyArticle.content}
        articleUrl={dummyArticle.articleUrl}
        name={dummyArticle.name}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsPage;
