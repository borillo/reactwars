jest.mock("../../FilmsRepository");

import React from "react";
import { BrowserRouter } from "react-router-dom";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

import { render } from "react-testing-library";

import Films from "../../index";
import filmsReducers from "../../actions/reducers";

const configureStore = () => {
  return createStore(
    combineReducers({
      films: filmsReducers
    }),
    applyMiddleware(thunkMiddleware)
  );
};

const store = configureStore();

const componentDom = render(
  <BrowserRouter>
    <Provider store={store}>
      <Films />
    </Provider>
  </BrowserRouter>
);

export default componentDom;
