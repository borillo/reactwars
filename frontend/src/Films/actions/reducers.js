import { FILMS_LOAD_START, FILMS_LOAD_END } from "./types";

export default (state = [], action) => {
  switch (action.type) {
    case FILMS_LOAD_START:
      return [];
    case FILMS_LOAD_END:
      return [...action.payload];
    default:
      return state;
  }
};
