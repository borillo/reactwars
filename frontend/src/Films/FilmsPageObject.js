export default class FilmsPageObject {
  constructor({ getByTestId, container, debug }) {
    this.getByTestId = getByTestId;
    this.container = container;
    this.debug = debug;
  }

  retrieveDom() {
    return this.container;
  }

  obtainFilms() {
    return this.getByTestId("films").querySelectorAll(".film");
  }

  obtainFilmsTitles() {
    const nodeTitles = this.container.querySelectorAll(".title");

    return [...nodeTitles].map(node => node.textContent);
  }

  obtainFilmsEpisodes() {
    const nodeEpisodes = this.container.querySelectorAll(".episode");

    return [...nodeEpisodes].map(node => node.textContent);
  }
}
