import { FILMS_LOAD_START, FILMS_LOAD_END, VOTE_EPISODE } from "./types";

const defaultState = {
  films: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FILMS_LOAD_START:
      return { ...state, films: [] };
    case FILMS_LOAD_END:
      return { ...state, films: [...action.payload] };
    case VOTE_EPISODE:
      return {
        ...state,
        [`votes-${action.payload}`]:
          parseInt(state[`votes-${action.payload}`] || 0, 10) + 1
      };
    default:
      return state;
  }
};
