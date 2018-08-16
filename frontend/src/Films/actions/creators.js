import { FILMS_LOAD_START, FILMS_LOAD_END, VOTE_EPISODE } from "./types";
import repository from "../FilmsRepository";

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
