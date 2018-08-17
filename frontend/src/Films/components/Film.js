import React, { Component } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import "./Film.css";

class Film extends Component {
  voteEpisode = () => {
    this.props.voteEpisode(this.props.episode);
  };

  render() {
    const { episode, title, poster, votes } = this.props;

    return (
      <div className="film">
        <div className="poster">
          <img alt="poster" src={poster} />
        </div>

        <div className="detail">
          <div className="title">{title}</div>
          <div className="episode">Episode {episode}</div>
          <div>
            <button
              className="vote"
              style={{ marginRight: "0.5rem" }}
              onClick={this.voteEpisode}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <span className="votes">{votes}</span> votes
          </div>
        </div>
      </div>
    );
  }
}

Film.defaultProps = {
  votes: 0
};

Film.propTypes = {
  episode: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  voteEpisode: PropTypes.func.isRequired
};

export default Film;
