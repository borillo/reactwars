import { connect } from 'react-redux';

import { loadFilmsAction } from './actions/creators';

import FilmsPanel from './FilmsPanel';

const mapStateToProps = (state) => ({ films: state.films });

const mapDispatchToProps = (dispatch) => {
  return {
    loadFilms: () => {
      dispatch(loadFilmsAction())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsPanel);