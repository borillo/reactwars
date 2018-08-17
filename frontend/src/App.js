import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Films from "./Films";
import About from "./About";

import "./App.css";

export default () => {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1>ReactWars</h1>
          <span>The Force arrives to the React world ... Feel it!!</span>
        </header>

        <aside>
          <ul className="app-menu">
            <li>
              <Link to="/films">
                <FontAwesomeIcon icon={faStar} /> Film list
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FontAwesomeIcon icon={faStar} /> About ReactWars
              </Link>
            </li>
          </ul>
        </aside>

        <section>
          <Switch>
            <Route exact path="/" component={Films} />
            <Route path="/films" component={Films} />
            <Route path="/about" component={About} />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
};
