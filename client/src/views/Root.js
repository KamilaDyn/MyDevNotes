import React, { Component } from "react";
import MainTemplate from "templates/MainTemplate";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import DevArticles from "views/DevArticles";
import DevProjects from "views/DevProjects";
import Notes from "views/Notes";
import DetailsPage from "views/DetailsPage";
import axios from "axios";
import { routes } from "routes";
import AppContext from "appcontext";

class Root extends Component {
  state = {
    devarticles: [],
    notes: [],
  };

  async getItems() {
    let devarticles = "json/api.json";

    await axios
      .get(devarticles)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }
  render() {
    const contextElement = {
      ...this.state,
    };
    return (
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route
              exact
              path={routes.home}
              render={() => <Redirect to="/notes" />}
            />
            <Route exact path={routes.notes} component={Notes} />
            <Route path={routes.note} component={DetailsPage} />
            <Route exact path={routes.devarticles} component={DevArticles} />
            <Route path={routes.devarticle} component={DetailsPage} />
            <Route exact path={routes.devprojects} component={DevProjects} />
            <Route path={routes.devproject} component={DetailsPage} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    );
  }
}

export default Root;
