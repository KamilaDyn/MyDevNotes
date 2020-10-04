import React from "react";
import AppContext from "appcontext";

const withContext = (Component) => {
  return function contextComponent(props) {
    return (
      <AppContext.Consumer>
        {(context) => <Component {...props} appContext={context} />}
      </AppContext.Consumer>
    );
  };
};

export default withContext;
