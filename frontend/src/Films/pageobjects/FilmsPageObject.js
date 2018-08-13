export default class FilmsPageObject {
  constructor({ getByTestId, container }) {
    this.getByTestId = getByTestId;
    this.container = container;
  }

  retrieveDom() {
    return this.container;
  }
  
  obtainFilms() {
    return this.getByTestId("films").children;
  }

  obtainFilmsTitles() {
    return []; /*this.wrapper
      .update()
      .find(".film .title")
      .map(film => film.text());*/
  }

  obtainFilmsEpisodes() {
    return []; /*this.wrapper
      .update()
      .find(".film .episode")
      .map(film => film.text());*/
  }
}
