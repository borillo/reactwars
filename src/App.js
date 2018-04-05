import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Films from './Films';
import About from './About';

export default () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>ReactWars</h1>

        <ul>
          <li><a href="/films">Films</a></li>
          <li><a href="/about">About</a></li>
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
