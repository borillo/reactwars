import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { loadFilmsAction } from './actions/creators';

const Films = ({ films }) => {
  return (
    <div className="films">
      {
        (films || []).map((film) => 
          <Film
            key={film.episode_id}
            title={film.title}
            episode={film.episode_id}
          />
        )
      }
    </div>
  )
}

const Film = ({ episode, title }) => {
  return (
    <div className="film">
      <div className="title"><strong>{title}</strong></div>
      <div className="episode">Episode {episode}</div>
    </div>
  )
}

class FilmsPanel extends Component {
  componentDidMount() {
    this.props.loadFilms();
  }

  render() {
    const { films } = this.props;

    return (
      <Fragment>
        <h1>Film list</h1>
        <Films films={films} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.films,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadFilms: () => {
      dispatch(loadFilmsAction())
    },
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(FilmsPanel);