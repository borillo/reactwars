jest.mock('../FilmsRepository');

import React from 'react';
import { mount } from 'enzyme';

import Films from '../index';
import FilmsPageObject from '../FilmsPageObject';

const FILM_TITLES = [
  'The Phantom Menace', 
  'Attack of the Clones', 
  'Revenge of the Sith', 
  'A New Hope', 
  'The Empire Strikes Back', 
  'Return of the Jedi', 
  'The Force Awakens'
];

const FILM_EPISODES = FILM_TITLES.map((title, index) => `Episode ${index+1}`);
const NUMBER_OF_FILMS = FILM_TITLES.length;

describe('Films', () => {
  let wrapper;
  let films;

  beforeEach(async () => {
    wrapper = mount(<Films />);
    films = new FilmsPageObject(wrapper);
  });

  it('should be listed', async () => {
    let filmList = films.obtainFilms();
    expect(filmList).toHaveLength(NUMBER_OF_FILMS);   
  });

  it('should show name and episode number', async () => {
    const filmsTitles = films.obtainFilmsTitles();
    expect(filmsTitles).toEqual(FILM_TITLES);

    const filmsEpisodes = films.obtainFilmsEpisodes();
    expect(filmsEpisodes).toEqual(FILM_EPISODES);
  });

  it('should be ordered by episode number', async () => {
    let episodes = films.obtainFilmsEpisodes();
    episodes.forEach((episode, index) => {
      expect(episode).toEqual(`Episode ${index + 1}`);
    });
  });

  it('should match snapshot', async () => {
    expect(wrapper).toMatchSnapshot();
  });
});
