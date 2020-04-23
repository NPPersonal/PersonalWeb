import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

import './global.scss';

// pages for this product
import ProfilePage from "views/ProfilePage/ProfilePage.js";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/profile-page" component={ProfilePage} />
      <Route path="/" component={ProfilePage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
