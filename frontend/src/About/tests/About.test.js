jest.mock("../AboutRepository");

import componentDom from "./dom/init";
import AboutPageObject from "../AboutPageObject";

const NUMBER_OF_TEACHERS = 2;

describe("About", () => {
  let page;

  beforeEach(() => {
    page = new AboutPageObject(componentDom);
  });

  test("should present wellcome information", () => {
    const title = page.obtainTitle();

    expect(title).toBeDefined();
  });

  test("should show associated teachers", () => {
    const teachers = page.obtainTeachers();

    expect(teachers).toHaveLength(NUMBER_OF_TEACHERS);
  });

  test("should match snapshot", async () => {
    expect(page.retrieveDom()).toMatchSnapshot();
  });
});
