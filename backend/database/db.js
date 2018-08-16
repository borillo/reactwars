const films = [
  {
    episode: 1,
    title: "The Phantom Menace",
    year: 1999
  },
  {
    episode: 2,
    title: "Attack of the Clones",
    year: 2002
  },
  {
    episode: 3,
    title: "Revenge of the Sith",
    year: 2005
  },
  {
    episode: 4,
    title: "A New Hope",
    year: 1977
  },
  {
    episode: 5,
    title: "The Empire Strikes Back",
    year: 1980
  },
  {
    episode: 6,
    title: "Return of the Jedi",
    year: 1983
  },
  {
    episode: 7,
    title: "The Force Awakens",
    year: 2015
  },
  {
    episode: 8,
    title: "The Last Jedi",
    year: 2017
  }
];

export default {
  films: films,
  titles: films.map(film => film.title),
  episodes: films.map(film => film.episode),
  numberOfFilms: films.length
};
