import React from "react";
import { BrowserRouter } from "react-router-dom";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

import Films from "../Films";
import About from "../About";

import filmsReducers from "../Films/actions/reducers";
import aboutReducers from "../About/actions/reducers";

import db from "../../../backend/database/db";

import fetchMock from "fetch-mock";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

const configureStore = () => {
  return createStore(
    combineReducers({
      films: filmsReducers,
      about: aboutReducers
    }),
    applyMiddleware(thunkMiddleware)
  );
};

const store = configureStore();

storiesOf("Films", module).add("Films list", () => {
  fetchMock.restore().getOnce("/api/films", db.films);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Films />
      </Provider>
    </BrowserRouter>
  );
});

storiesOf("About", module).add("About ReactWars", () => {
  fetchMock
    .restore()
    .getOnce("/api/teachers", ["Ricardo Borillo", "Jaime Perera"]);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <About />
      </Provider>
    </BrowserRouter>
  );
});
