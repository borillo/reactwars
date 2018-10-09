import React from "react";
import PropTypes from "prop-types";

import UnofficialFilm from "./UnofficialFilm";

import "./Films.css";

const UnofficialFilms = ({ data: films }) => {
  return (
    <div className="films">
      <div className="films-list">
        {films.map(film => (
          <UnofficialFilm key={film.title} film={film} />
        ))}
      </div>
    </div>
  );
};

UnofficialFilms.propTypes = {
  data: PropTypes.array.isRequired
};

export default UnofficialFilms;
