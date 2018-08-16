import FilmsPageObject from "../../pageobjects/FilmsPageObject";

context("Films", () => {
  let page;

  beforeEach(() => {
    page = new FilmsPageObject(cy);
    page.open();
  });

  it("should be listed", () => {
    const films = page.films();

    films.should("have.length", 8);
  });
});
