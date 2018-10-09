import React from "react";
import PropTypes from "prop-types";

import "./Film.css";

const UnofficialFilm = ({ film: { title, director, year, poster } }) => (
  <div className="film">
    <div className="poster">
      <img alt="poster" src={poster} />
    </div>

    <div className="detail">
      <div className="title">{title}</div>
      <div className="director">{director}</div>
      <div className="year">{year}</div>
    </div>
  </div>
);

UnofficialFilm.propTypes = {
  film: PropTypes.object.isRequired
};

export default UnofficialFilm;
