const sortFilmsByEpisodeNumber = data => {
  return data.results.sort((a, b) => {
    if (a.episode_id > b.episode_id) return 1;
    if (a.episode_id < b.episode_id) return -1;
    return 0;
  });
};

export default {
  async retrieveFilms() {
    return fetch("/api/films").then(response => response.json());
  }
};
