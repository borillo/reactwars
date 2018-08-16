import React, { Component } from "react";
import PropTypes from "prop-types";

class Film extends Component {
  voteEpisode = () => {
    this.props.voteEpisode(this.props.episode);
  };

  render() {
    const { episode, title, votes } = this.props;

    return (
      <div className="film">
        <div className="title">
          <strong>{title}</strong>
        </div>
        <div className="episode">Episode {episode}</div>
        <div>
          <span className="votes">{votes}</span>
          votes |
          <button className="vote" onClick={this.voteEpisode}>
            Vote
          </button>
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
  voteEpisode: PropTypes.func.isRequired
};

export default Film;
