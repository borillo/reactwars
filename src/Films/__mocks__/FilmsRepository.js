import data from './films-fixtures.json';

export default {
  retrieveFilms() {
    let films = data.results.sort((a, b) => {
      if (a.episode_id > b.episode_id) return 1;
      if (a.episode_id < b.episode_id) return -1;
      return 0;
    });

    return Promise.resolve(Object.assign(data, {results: films}));
  }
}