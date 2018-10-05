import FilmsPageObject from "../../pageobjects/FilmsPageObject";

context("Films", () => {
  let page;

  beforeEach(() => {
    page = new FilmsPageObject(cy);
    page.open();
  });

  it("should have a section title", () => {
    const title = page.title();

    title.should("have.text", "Film list");
  });

  it("should be listed", () => {
    const films = page.films();

    films.should("have.length.greaterThan", 0);
  });

  it("should show the episode number", () => {
    const episodeNumbers = page.filmsEpisodes();

    episodeNumbers.first().contains("Episode 1");
  });
});
