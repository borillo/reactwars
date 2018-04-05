import { FILMS_LOAD_START, FILMS_LOAD_END } from './types';
import repository from './../FilmsRepository';

export const loadFilmsAction = () => {
  return (dispatch) => {
    dispatch({
      type: FILMS_LOAD_START
    });

    return repository.retrieveFilms()
      .then(({ results: films }) => {
        dispatch({
          type: FILMS_LOAD_END,
          payload: films,
        })
      })
  }
}