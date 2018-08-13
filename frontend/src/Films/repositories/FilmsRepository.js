const sortFilmsByEpisodeNumber = data => {
  return data.sort((a, b) => {
    if (a.episode > b.episode) return 1;
    if (a.episode < b.episode_) return -1;
    return 0;
  });
};

export default {
  retrieveFilms() {
    return fetch("/api/films").then(response => response.json());
  }
};
