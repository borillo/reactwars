import React from "react";
import PropTypes from "prop-types";

import Film from "./Film";

const Films = ({ data: films, voteEpisode }) => {
  return (
    <div className="films" data-testid="films">
      {films.map(film => (
        <Film
          key={film.episode}
          title={film.title}
          episode={film.episode}
          votes={film.votes}
          voteEpisode={voteEpisode}
        />
      ))}
    </div>
  );
};

Films.propTypes = {
  data: PropTypes.array.isRequired,
  voteEpisode: PropTypes.func.isRequired
};

export default Films;
