const films = [
  {
    episode: 1,
    title: "The Phantom Menace",
    year: 1999,
    poster:
      "https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg"
  },
  {
    episode: 2,
    title: "Attack of the Clones",
    year: 2002,
    poster:
      "https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg"
  },
  {
    episode: 3,
    title: "Revenge of the Sith",
    year: 2005,
    poster:
      "https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg"
  },
  {
    episode: 4,
    title: "A New Hope",
    year: 1977,
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg"
  },
  {
    episode: 5,
    title: "The Empire Strikes Back",
    year: 1980,
    poster:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg"
  },
  {
    episode: 6,
    title: "Return of the Jedi",
    year: 1983,
    poster:
      "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg"
  },
  {
    episode: 7,
    title: "The Force Awakens",
    year: 2015,
    poster:
      "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg"
  },
  {
    episode: 8,
    title: "The Last Jedi",
    year: 2017,
    poster:
      "https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg"
  }
];

export default {
  films: films,
  titles: films.map(film => film.title),
  episodes: films.map(film => film.episode),
  numberOfFilms: films.length
};
