import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import "./Film.css";

class Film extends Component {
  voteEpisode = () => {
    this.props.voteEpisode(this.props.film.episode);
  };

  render() {
    const {
      film: { episode, title, poster, votes, plot }
    } = this.props;

    return (
      <div className="film">
        <div className="poster">
          <img alt="poster" src={poster} />
        </div>

        <div className="detail">
          <div className="title">
            <Link
              to={{
                pathname: `/films/${episode}`,
                state: { episode, plot, title }
              }}
            >
              {title}
            </Link>
          </div>
          <div className="episode">Episode {episode}</div>
          <div>
            <button
              className="vote"
              style={{ marginRight: "0.5rem" }}
              onClick={this.voteEpisode}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <span className="votes">{votes}</span>{" "}
            {votes ? "votes" : "vote for me!!!"}
          </div>
        </div>
      </div>
    );
  }
}

Film.propTypes = {
  film: PropTypes.object.isRequired,
  voteEpisode: PropTypes.func.isRequired
};

export default Film;
