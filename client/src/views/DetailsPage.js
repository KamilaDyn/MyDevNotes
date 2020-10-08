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
      title: "Understanding React 'setState'",
      content:
        "React components can, and often do, have state. State can be anything, but think of things like whether a user is logged in or not and displaying the correct username based on which account is active. Or an array of blog posts. Or if a modal is open or not and which tab within it is active.React components with state render UI based on that state. When the state of components changes, so does the component UI. That makes understanding when and how to change the state of your component important. At the end of this tutorial, you should know how setState works, and be able to avoid common pitfalls that many of us hit when when learning React.",
      articleUrl: "https://css-tricks.com/understanding-react-setstate/",
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
