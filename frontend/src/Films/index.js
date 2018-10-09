import { connect } from "react-redux";

import {
  loadFilmsAction,
  voteEpisodeAction,
  registerEpisodeAction
} from "./actions/creators";

import FilmsPanel from "./components/FilmsPanel";

const mapStateToProps = ({ films: data }) => {
  const filmsWithVotes = data.films.map(film => ({
    ...film,
    votes: data[`votes-${film.episode}`]
  }));

  return { films: filmsWithVotes, unofficialFilms: data.unofficialFilms };
};

const mapDispatchToProps = dispatch => {
  return {
    loadFilms: () => {
      dispatch(loadFilmsAction());
    },

    voteEpisode: episode => {
      dispatch(voteEpisodeAction(episode));
    },

    registerEpisode: film => {
      dispatch(registerEpisodeAction(film));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsPanel);
