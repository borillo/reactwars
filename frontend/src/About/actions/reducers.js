import { TEACHERS_LOAD_START, TEACHERS_LOAD_END } from "./types";

export default (state = [], action) => {
  switch (action.type) {
    case TEACHERS_LOAD_START:
      return [];
    case TEACHERS_LOAD_END:
      return [...action.payload];
    default:
      return state;
  }
};
