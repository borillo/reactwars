import { DIRECTORS_LOAD_START, DIRECTORS_LOAD_END } from "./types";

export default (state = [], action) => {
  switch (action.type) {
    case DIRECTORS_LOAD_START:
      return [];
    case DIRECTORS_LOAD_END:
      return [...action.payload];
    default:
      return state;
  }
};
