import AboutPageObject from "../../pageobjects/AboutPageObject";

context("Directors", () => {
  let page;

  beforeEach(() => {
    page = new AboutPageObject(cy);
    page.open();
  });

  it("should show the director list", () => {
    const directors = page.directors();

    directors.should("have.length", 2);
  });
});
