export default {
  async retrieveFilms() {
    const response = await fetch("/api/films");
    const films = await response.json();

    return films;
  }
};
