import React from "react";
import PropTypes from "prop-types";

const Directors = ({ data: directors }) => {
  return (
    <ul className="directors" data-testid="directors">
      {directors.map(director => {
        return (
          <li key={director} className="director">
            {director}
          </li>
        );
      })}
    </ul>
  );
};

Directors.propTypes = {
  data: PropTypes.array.isRequired
};

export default Directors;
