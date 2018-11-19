import AboutPageObject from "../../pageobjects/AboutPageObject";

context("Directors", () => {
  let page;

  beforeEach(() => {
    page = new AboutPageObject(cy);
    page.open();
  });

  it("should show the director list", () => {
    page.directors().should("have.length", 5);
  });
});
