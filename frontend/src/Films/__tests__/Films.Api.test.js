import React from 'react';

import Repository from '../FilmsRepository';

const FILM_TITLES = [
  'The Phantom Menace', 
  'Attack of the Clones', 
  'Revenge of the Sith', 
  'A New Hope', 
  'The Empire Strikes Back', 
  'Return of the Jedi', 
  'The Force Awakens'
];

const FILM_EPISODES = FILM_TITLES.map((title, index) => index+1);
const NUMBER_OF_FILMS = FILM_TITLES.length;

describe('Films API', () => {
  it('should list all movies', async () => {   
    let films = await Repository.retrieveFilms();

    const filmsTitles = films.results.map((film) => film.title);

    expect(filmsTitles).toEqual(FILM_TITLES);   
  });
});
