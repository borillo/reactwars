import React from "react";
import PropTypes from "prop-types";

const Film = ({ episode, title }) => {
  return (
    <div className="film">
      <div className="title">
        <strong>{title}</strong>
      </div>
      <div className="episode">Episode {episode}</div>
    </div>
  );
};

Film.propTypes = {
  episode: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default Film;
