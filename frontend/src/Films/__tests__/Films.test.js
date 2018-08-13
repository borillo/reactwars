jest.mock("../repositories/FilmsRepository", () => {
  return {
    retrieveFilms() {
      return Promise.resolve([{ episode: 1, title: "A" }]);
    }
  };
});

import React from "react";
import { Provider } from "react-redux";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import { render } from "react-testing-library";

import Films from "../index";
import FilmsPageObject from "../pageobjects/FilmsPageObject";

import filmsReducers from "../actions/reducers";

const configureStore = () => {
  return createStore(
    combineReducers({
      films: filmsReducers
    }),
    applyMiddleware(thunkMiddleware)
  );
};

describe("Films", () => {
  let pageObject;

  beforeEach(() => {
    const store = configureStore();

    const componentDom = render(
      <Provider store={store}>
        <Films />
      </Provider>
    );

    pageObject = new FilmsPageObject(componentDom);
  });

  test("should be listed", async () => {
    let filmList = pageObject.obtainFilms();

    expect(filmList).toHaveLength(1);
  });

  /*it("should show name and episode number", async () => {
    const filmsTitles = films.obtainFilmsTitles();
    expect(filmsTitles).toEqual(FILM_TITLES);

    const filmsEpisodes = films.obtainFilmsEpisodes();
    expect(filmsEpisodes).toEqual(FILM_EPISODES);
  });

  it("should be ordered by episode number", async () => {
    let episodes = films.obtainFilmsEpisodes();
    episodes.forEach((episode, index) => {
      expect(episode).toEqual(`Episode ${index + 1}`);
    });
  });*/

  it("should match snapshot", async () => {
    expect(pageObject.retrieveDom()).toMatchSnapshot();
  });
});
