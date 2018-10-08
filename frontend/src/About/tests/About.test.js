jest.mock("../repositories/AboutRepository");

import React from "react";
import { render } from "react-testing-library";

import { build } from "../../App/config";

import About from "../index";
import AboutPageObject from "./pageobjects/AboutPageObject";

const NUMBER_OF_DIRECTORS = 5;

describe("About", () => {
  let page;

  beforeEach(() => {
    const about = render(build(<About />));
    page = new AboutPageObject(about);
  });

  test("should present wellcome information", () => {
    const title = page.obtainTitle();

    expect(title).toBeDefined();
  });

  test("should show associated directors", () => {
    const directors = page.obtainDirectors();

    expect(directors).toHaveLength(NUMBER_OF_DIRECTORS);
  });

  test("should match snapshot", async () => {
    expect(page.retrieveContainer()).toMatchSnapshot();
  });
});
