import { connect } from "react-redux";

import { loadFilmsAction } from "./actions/creators";

import FilmsPanel from "./components/FilmsPanel";

const mapStateToProps = ({ films: data }) => ({ data });

const mapDispatchToProps = dispatch => {
  return {
    loadFilms: () => {
      dispatch(loadFilmsAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsPanel);
