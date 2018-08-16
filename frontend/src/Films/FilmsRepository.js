export default {
  retrieveFilms() {
    return fetch("/api/films").then(response => response.json());
  }
};
