import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
// import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SectionSkills from 'views/Sections/SectionSkills.js';

console.log(process.env.PUBLIC_URL);

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/landing-page" component={LandingPage} />
      <Route exact path="/profile-page" component={ProfilePage} />
      <Route exact path="/login-page" component={LoginPage} />
      <Route path="/" component={ProfilePage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
