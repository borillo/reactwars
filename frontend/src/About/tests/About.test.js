jest.mock("../repositories/AboutRepository");

import React from "react";

import { render } from "../../App/config";

import About from "../index";
import AboutPageObject from "./pageobjects/AboutPageObject";

describe("About", () => {
  let page;

  beforeEach(() => {
    const about = render(<About />);
    page = new AboutPageObject(about);
  });

  test("should show associated directors", () => {
    const georgeLucas = page.obtainDirectorWithName("George Lucas");

    expect(georgeLucas).toBeDefined();
  });

  test("should match snapshot", () => {
    const container = page.retrieveContainer();
    expect(container).toMatchSnapshot();
  });
});
