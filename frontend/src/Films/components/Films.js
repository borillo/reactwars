import React from "react";
import PropTypes from "prop-types";

import Film from "./Film";

const Films = ({ data: films }) => {
  return (
    <div className="films" data-testid="films">
      {films.map(film => (
        <Film key={film.episode} title={film.title} episode={film.episode} />
      ))}
    </div>
  );
};

Films.propTypes = {
  data: PropTypes.array.isRequired
};

export default Films;
