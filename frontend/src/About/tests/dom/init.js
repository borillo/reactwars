import React from "react";
import { BrowserRouter } from "react-router-dom";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

import { render } from "react-testing-library";

import About from "../../index";
import aboutReducers from "../../actions/reducers";

const configureStore = () => {
  return createStore(
    combineReducers({
      about: aboutReducers
    }),
    applyMiddleware(thunkMiddleware)
  );
};

const store = configureStore();

const componentDom = render(
  <BrowserRouter>
    <Provider store={store}>
      <About />
    </Provider>
  </BrowserRouter>
);

export default componentDom;
