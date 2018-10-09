import {
  FILMS_LOAD_START,
  FILMS_LOAD_END,
  VOTE_EPISODE,
  REGISTER_EPISODE
} from "./types";

const defaultState = {
  films: [],
  unofficialFilms: []
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
    case REGISTER_EPISODE:
      return {
        ...state,
        unofficialFilms: [...state.unofficialFilms, action.payload]
      };
    default:
      return state;
  }
};
