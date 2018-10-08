import { connect } from "react-redux";

import AboutPanel from "./components/AboutPanel";

import { loadDirectorsAction } from "./actions/creators";

const mapStateToProps = ({ about: data }) => ({ data });

const mapDispatchToProps = dispatch => {
  return {
    loadDirectors: () => {
      dispatch(loadDirectorsAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPanel);
