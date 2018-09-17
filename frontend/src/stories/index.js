import React from "react";
import { BrowserRouter } from "react-router-dom";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

import Films from "../Films";
import About from "../About";
import Film from "../Films/components/Film";
import Teachers from "../About/components/Teachers";

import filmsReducers from "../Films/actions/reducers";
import aboutReducers from "../About/actions/reducers";

import db from "../../../backend/database/db";
const teachers = ["Ricardo Borillo", "Jaime Perera"];

import fetchMock from "fetch-mock";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

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

storiesOf("Films", module)
  .add(
    "List of films",
    withInfo("Full example for Films")(() => {
      fetchMock.restore().getOnce("/api/films", db.films);

      return (
        <BrowserRouter>
          <Provider store={store}>
            <Films />
          </Provider>
        </BrowserRouter>
      );
    })
  )
  .add(
    "Film detail",
    withInfo("Individual Film compoennt")(() => (
      <BrowserRouter>
        <Film
          film={{ episode: 1, title: "1" }}
          voteEpisode={action("Episode voted!!")}
        />
      </BrowserRouter>
    ))
  );

storiesOf("About", module)
  .add(
    "About reference",
    withInfo("About reference with teachers info")(() => {
      fetchMock.restore().getOnce("/api/teachers", teachers);

      return (
        <BrowserRouter>
          <Provider store={store}>
            <About />
          </Provider>
        </BrowserRouter>
      );
    })
  )
  .add(
    "Teachers list",
    withInfo("Teachers list component")(() => <Teachers data={teachers} />)
  );
