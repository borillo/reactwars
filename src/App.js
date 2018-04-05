import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { 
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';

import Films from './Films';
import About from './About';

export default () => {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">ReactWars</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem href="/films">Films</NavItem>
              <NavItem href="/about">About</NavItem>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path="/" component={Films}/>
            <Route path="/films" component={Films}/>
            <Route path="/about" component={About}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
};
