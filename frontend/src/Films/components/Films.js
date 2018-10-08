import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import Film from "./Film";

import "./Films.css";

class FilmDetail extends Component {
  render() {
    const { episode, title, plot } = this.props.location.state;

    return (
      <div>
        <h3>
          Episode {episode}: {title}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: plot }} />
      </div>
    );
  }
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const Films = ({ data: films, voteEpisode, match, location }) => {
  return (
    <div className="films">
      <div className="films-list">
        {films.map(film => (
          <Film
            key={film.episode}
            match={match}
            film={film}
            voteEpisode={voteEpisode}
          />
        ))}
      </div>

      <div className="films-film-detail">
        <Route component={ScrollToTop} />
        <Route path="/films/:episode" component={FilmDetail} />
      </div>
    </div>
  );
};

Films.propTypes = {
  data: PropTypes.array.isRequired,
  voteEpisode: PropTypes.func.isRequired
};

export default Films;
