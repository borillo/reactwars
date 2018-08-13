import React, { Component } from "react";
import { render } from "react-testing-library";
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

class AboutPanel extends Component {
  static getDefaultProps = {
    data: []
  };

  static propTypes = {
    data: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.loadTeachers();
  }

  render() {
    const { data } = this.props;

    return (
      <div className="panel-about">
        <h1 data-testid="panel-about-title">This is ReactWars app!!</h1>
        <p>
          A hello world application build on top of React v16. Meet the team:
        </p>

        <Teachers data={data} />

        <button>Feel the force!!</button>
      </div>
    );
  }
}

export default AboutPanel;