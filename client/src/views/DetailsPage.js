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
      case routes.devproject:
        this.setState({ pageType: "devprojects" });
        break;
      case routes.devarticle:
        this.setState({ pageType: "devarticles" });
        break;
      case routes.note:
        this.setState({ pageType: "notes" });
        break;
      default:
        console.log("something went wrong with path");
    }
  }
  render() {
    const { pageType } = this.state;
    return (
      <DetailsTemplate pageType={pageType}>
        <p>{pageType}</p>
      </DetailsTemplate>
    );
  }
}

// DetailsPage.propTypes = {
//   match: PropTypes.string.isRequired,
// };
export default DetailsPage;
