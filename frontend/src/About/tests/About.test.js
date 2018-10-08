jest.mock("../repositories/AboutRepository");

import React from "react";
import { render } from "react-testing-library";

import { build } from "../../App/config";

import About from "../index";
import AboutPageObject from "./pageobjects/AboutPageObject";

const NUMBER_OF_DIRECTORS = 5;

describe("About", () => {
  let page, about;

  beforeEach(() => {
    about = render(build(<About />));
    page = new AboutPageObject(about);
  });

  test("should present wellcome information", () => {
    const title = page.obtainWithTitle("This is ReactWars app!!");

    expect(title).toBeDefined();
  });

  test("should show associated directors", () => {
    const georgeLucas = page.obtainDirectorWithName("George Lucas");

    expect(georgeLucas).toBeDefined();
  });

  test("should match snapshot", () => {
    expect(page.retrieveContainer()).toMatchSnapshot();
  });
});
