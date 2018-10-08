jest.mock("../repositories/FilmsRepository");

import React from "react";
import { render, cleanup } from "react-testing-library";

import Films from "../index";
import FilmsPageObject from "./pageobjects/FilmsPageObject";

import { build } from "../../App/config";

const NUMBER_OF_FILMS = 8;

afterEach(cleanup);

describe("Films", () => {
  let page;

  beforeEach(() => {
    const about = render(build(<Films />));
    page = new FilmsPageObject(about);
  });

  test("should be listed", () => {
    let films = page.obtainFilms();

    expect(films).toHaveLength(NUMBER_OF_FILMS);
  });

  test("should show episode title", () => {
    const thePhantomMenace = page.obtainFilmWithTitle("The Phantom Menace");

    expect(thePhantomMenace).toBeDefined();
  });

  test("should be ordered by episode number", () => {
    expect(page).toShowEpisodesInOrder();
  });

  test("should match snapshot", () => {
    expect(page.retrieveContainer()).toMatchSnapshot();
  });
});
