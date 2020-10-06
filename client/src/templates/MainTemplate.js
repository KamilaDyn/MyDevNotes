import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";
import { withRouter } from "react-router";
import AppContext from "appcontext";

class MainTemplate extends Component {
  state = {
    pageType: "notes",
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = "") => {
    const pageTypes = ["devprojects", "devarticles", "notes"];
    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));

    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
      console.log(this.state);
    }
  };

  // axios.get('http://localhost:3000/devarticles')
  // .then(response=> console.log(response));

  render() {
    const { children } = this.props;
    const { pageType } = this.state;

    return (
      <div>
        <AppContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppContext.Provider>
      </div>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(MainTemplate);
