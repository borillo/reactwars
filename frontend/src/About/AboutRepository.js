export default {
  async retrieveDirectors() {
    let response = await fetch("/api/directors");
    let directors = await response.json();

    return directors;
  }
};
