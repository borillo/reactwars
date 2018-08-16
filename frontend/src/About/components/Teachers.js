import React from "react";
import PropTypes from "prop-types";

const Teachers = ({ data: teachers }) => {
  return (
    <ul className="teachers" data-testid="teachers">
      {teachers.map(teacher => {
        return (
          <li key={teacher} className="teacher">
            {teacher}
          </li>
        );
      })}
    </ul>
  );
};

Teachers.propTypes = {
  data: PropTypes.array.isRequired
};

export default Teachers;
