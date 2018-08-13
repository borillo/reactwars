import { connect } from "react-redux";

import AboutPanel from "./components/AboutPanel";

import { loadTeachersAction } from "./actions/creators";

const mapStateToProps = ({ about: data }) => ({ data });

const mapDispatchToProps = dispatch => {
  return {
    loadTeachers: () => {
      dispatch(loadTeachersAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPanel);
