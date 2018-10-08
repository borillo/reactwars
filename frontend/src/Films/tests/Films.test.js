jest.mock("../repositories/FilmsRepository");

import React from "react";
import { render } from "react-testing-library";

import Films from "../index";
import FilmsPageObject from "./pageobjects/FilmsPageObject";

import { build } from "../../App/config";

const NUMBER_OF_FILMS = 8;

describe("Films", () => {
  let page;

  beforeEach(() => {
    const about = render(build(<Films />));
    page = new FilmsPageObject(about);
  });

  test("should be listed", async () => {
    let filmList = page.obtainFilms();

    expect(filmList).toHaveLength(NUMBER_OF_FILMS);
  });

  test("should show episode title", async () => {
    const filmsTitles = page.obtainFilmsTitles();

    expect(filmsTitles).toHaveLength(NUMBER_OF_FILMS);
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
