jest.mock("../FilmsRepository");

import React from "react";
import { Provider } from "react-redux";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import { render } from "react-testing-library";

import Films from "../index";
import FilmsPageObject from "../FilmsPageObject";
import filmsReducers from "../actions/reducers";

import db from "../../../../backend/database/db";
const FILM_TITLES = db.titles;
const NUMBER_OF_FILMS = db.numberOfFilms;

const configureStore = () => {
  return createStore(
    combineReducers({
      films: filmsReducers
    }),
    applyMiddleware(thunkMiddleware)
  );
};

describe("Films", () => {
  let page;

  beforeEach(() => {
    const store = configureStore();

    const componentDom = render(
      <Provider store={store}>
        <Films />
      </Provider>
    );

    page = new FilmsPageObject(componentDom);
  });

  test("should be listed", async () => {
    let filmList = page.obtainFilms();

    expect(filmList).toHaveLength(NUMBER_OF_FILMS);
  });

  test("should show name for each shown episode", async () => {
    const filmsTitles = page.obtainFilmsTitles();
    expect(filmsTitles).toEqual(FILM_TITLES);
  });

  test("should be ordered by episode number", async () => {
    let episodes = page.obtainFilmsEpisodes();
    episodes.forEach((episode, index) => {
      expect(episode).toEqual(`Episode ${index + 1}`);
    });
  });

  test("should match snapshot", async () => {
    expect(page.retrieveDom()).toMatchSnapshot();
  });
});
