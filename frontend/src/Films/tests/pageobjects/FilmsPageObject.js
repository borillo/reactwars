export default class FilmsPageObject {
  constructor({ getByText, queryAllByText, container }) {
    this.getByText = getByText;
    this.queryAllByText = queryAllByText;
    this.container = container;
  }

  retrieveContainer() {
    return this.container;
  }

  obtainFilms() {
    return this.queryAllByText(/Episode/).length;
  }

  obtainFilmWithTitle(title) {
    return this.getByText(title);
  }

  obtainFirstEpisode() {
    return this.queryAllByText(/Episode/)[0].textContent;
  }

  obtainLastEpisode() {
    const episodes = this.queryAllByText(/Episode/);
    return episodes[episodes.length - 1].textContent;
  }
}
