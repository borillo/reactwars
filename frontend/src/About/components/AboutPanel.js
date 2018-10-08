import React, { Component } from "react";
import PropTypes from "prop-types";

import Directors from "./Directors";

class AboutPanel extends Component {
  static getDefaultProps = {
    data: []
  };

  static propTypes = {
    data: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.loadDirectors();
  }

  render() {
    const { data } = this.props;

    return (
      <div className="panel-about">
        <h1>This is ReactWars app!!</h1>

        <p>A hello world application build on top of React v16.</p>

        <h3>Directors:</h3>

        <Directors data={data} />

        <button>Feel the force!!</button>
      </div>
    );
  }
}

export default AboutPanel;
