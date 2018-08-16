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
    const nodeTitles = this.container.querySelectorAll(".title");

    return [...nodeTitles].map(node => node.textContent);
  }

  obtainFilmsEpisodes() {
    const nodeEpisodes = this.container.querySelectorAll(".episode");

    return [...nodeEpisodes].map(node => node.textContent);
  }
}
