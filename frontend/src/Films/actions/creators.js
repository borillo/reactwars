import {
  FILMS_LOAD_START,
  FILMS_LOAD_END,
  VOTE_EPISODE,
  REGISTER_EPISODE
} from "./types";

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

export const voteEpisodeAction = episode => {
  return async dispatch => {
    dispatch({
      type: VOTE_EPISODE,
      payload: episode
    });
  };
};

export const registerEpisodeAction = film => {
  return async dispatch => {
    dispatch({
      type: REGISTER_EPISODE,
      payload: film
    });
  };
};
