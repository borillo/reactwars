import { connect } from "react-redux";

import { loadFilmsAction, voteEpisodeAction } from "./actions/creators";

import FilmsPanel from "./components/FilmsPanel";

const mapStateToProps = ({ films: data }) => {
  const filmsWithVotes = data.films.map(film => ({
    ...film,
    votes: data[`votes-${film.episode}`]
  }));

  return { data: filmsWithVotes };
};

const mapDispatchToProps = dispatch => {
  return {
    loadFilms: () => {
      dispatch(loadFilmsAction());
    },

    voteEpisode: episode => {
      dispatch(voteEpisodeAction(episode));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsPanel);
