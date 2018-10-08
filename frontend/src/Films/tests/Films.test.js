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
    let films = page.obtainFilms();

    expect(films).toHaveLength(NUMBER_OF_FILMS);
  });

  test("should show episode title", async () => {
    const thePhantomMenace = page.obtainFilmWithTitle("The Phantom Menace");

    expect(thePhantomMenace).toBeDefined();
  });

  test("should be ordered by episode number", async () => {
    let first = page.obtainFirstEpisode();
    let last = page.obtainLastEpisode();

    expect(first).toEqual("Episode 1");
    expect(last).toEqual(`Episode ${NUMBER_OF_FILMS}`);
  });

  test("should match snapshot", async () => {
    expect(page.retrieveContainer()).toMatchSnapshot();
  });
});
