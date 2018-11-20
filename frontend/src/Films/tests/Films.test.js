jest.mock("../repositories/FilmsRepository");

import React from "react";

import { render } from "../../App/config";

import Films from "../index";
import FilmsPageObject from "./pageobjects/FilmsPageObject";

const NUMBER_OF_FILMS = 8;

describe("Films", () => {
  let page;

  beforeEach(() => {
    const films = render(<Films />);
    page = new FilmsPageObject(films);
  });

  test("should be listed", () => {
    let films = page.obtainFilms();

    expect(films).toHaveLength(NUMBER_OF_FILMS);
  });

  test("should be ordered by episode number", () => {
    expect(page).toShowEpisodesInOrder();
  });
});
