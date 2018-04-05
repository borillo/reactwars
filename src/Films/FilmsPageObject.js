export default class FilmsPageObject {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }
 
  obtainFilms() {
    return this.wrapper.update().find('.film');
  }
  
  obtainFilmsTitles() {
    return this.wrapper.update().find('.film .title').map((film) => film.text());
  }

  obtainFilmsEpisodes() {
    return this.wrapper.update().find('.film .episode').map((film) => film.text());
  }
}
