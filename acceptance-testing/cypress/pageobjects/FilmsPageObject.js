class FilmsPageObject {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  open() {
    this.wrapper.server();
    this.wrapper.route("/api/films", "fixture:films");

    this.wrapper.visit("/films");
  }

  title() {
    return this.wrapper.get(".films-panel h1").first();
  }

  films() {
    return this.wrapper.get(".film");
  }

  filmsTitles() {
    return this.wrapper.get(".film .title");
  }

  filmsEpisodes() {
    return this.wrapper.get(".film .episode");
  }

  numVotes(filmName) {
    return this.wrapper
      .contains(".film", filmName)
      .find(".votes")
      .invoke("text")
      .then(text => {
        if (!text) return 0;
        return parseInt(text, 10);
      });
  }

  voteFilm(filmName) {
    this.wrapper
      .contains(filmName)
      .parentsUntil(".film")
      .parent()
      .find(".vote")
      .click();
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
