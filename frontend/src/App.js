import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Films from "./Films";
import About from "./About";

export default () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>ReactWars</h1>

        <ul className="menu">
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Films} />
          <Route path="/films" component={Films} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
