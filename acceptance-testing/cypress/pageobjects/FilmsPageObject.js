class FilmsPageObject {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  open() {
    this.wrapper.visit("/films");
  }

  films() {
    return this.wrapper.get(".film");
  }

  registerFilm(film) {
    return this.wrapper
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
