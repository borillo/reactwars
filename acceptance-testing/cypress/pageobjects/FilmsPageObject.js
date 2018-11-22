class FilmsPageObject {
  constructor(browser) {
    this.browser = browser;
  }

  open() {
    this.browser.visit("/films");
  }

  films() {
    return this.browser.get(".film");
  }

  registerFilm(film) {
    return this.browser
      .get(".new-film-title")
      .type(film.title)
      .get(".new-film-director")
      .type(film.director)
      .get(".new-film-year")
      .type(film.year)
      .get(".new-film-poster")
      .type(film.poster)
      .get(".save-new-film")
      .click();
  }
}

export default FilmsPageObject;
