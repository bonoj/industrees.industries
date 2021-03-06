import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../src/views/App";
import injectContext from "../src/store/appContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="d-flex flex-column">
      <BrowserRouter basename={basename}>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route>
            <h1>Not found!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
