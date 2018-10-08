import { DIRECTORS_LOAD_START, DIRECTORS_LOAD_END } from "./types";
import repository from "../AboutRepository";

export const loadDirectorsAction = () => {
  return async dispatch => {
    dispatch({
      type: DIRECTORS_LOAD_START
    });

    const directors = await repository.retrieveDirectors();

    dispatch({
      type: DIRECTORS_LOAD_END,
      payload: directors
    });
  };
};
