class FilmsPageObject {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  open() {
    this.wrapper.server();
    this.wrapper.route("/api/films", "fixture:films");

    this.wrapper.visit("/films");
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

  currentVotes(filmName) {
    return this.wrapper
      .contains(filmName)
      .parentsUntil(".film")
      .parent()
      .find(".votes")
      .invoke("text")
      .then(text => {
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
}

export default FilmsPageObject;
