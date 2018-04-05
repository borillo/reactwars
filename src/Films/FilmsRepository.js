const BASE_URL = 'https://swapi.co/api';

const sortFilmsByEpisodeNumber = (data) => {
    return data.results.sort((a, b) => {
      if (a.episode_id > b.episode_id) return 1;
      if (a.episode_id < b.episode_id) return -1;
      return 0;
    });
};

export default {
  async retrieveFilms() {
    return new Promise(async (resolve, reject) => {
      var corsHeaders = new Headers();
      corsHeaders.append('Origin', '*');

      let response = await fetch(BASE_URL + '/films/', { headers: corsHeaders });
      let data = await response.json();
      
      let sortedFilms = sortFilmsByEpisodeNumber(data);
      
      resolve({ 
        ...data,
        results: sortedFilms 
      });
    });
  }
}