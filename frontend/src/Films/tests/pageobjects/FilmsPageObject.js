export default class FilmsPageObject {
  constructor({ queryAllByText }) {
    this.queryAllByText = queryAllByText;
  }

  obtainFilms() {
    return this.queryAllByText(/Episode/);
  }

  numberOfFilms() {
    return this.obtainFilms().length;
  }

  obtainFirstEpisode() {
    return this.queryAllByText(/Episode/)[0].textContent;
  }

  obtainLastEpisode() {
    const episodes = this.queryAllByText(/Episode/);
    return episodes[episodes.length - 1].textContent;
  }
}
