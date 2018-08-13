import { FILMS_LOAD_START, FILMS_LOAD_END } from "./types";
import repository from "../repositories/FilmsRepository";

export const loadFilmsAction = () => {
  return async dispatch => {
    dispatch({
      type: FILMS_LOAD_START
    });

    const films = await repository.retrieveFilms();

    dispatch({
      type: FILMS_LOAD_END,
      payload: films
    });
  };
};