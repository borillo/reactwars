import React, { Component } from "react";
import PropTypes from "prop-types";

import Films from "./Films";

class FilmsPanel extends Component {
  static getDefaultProps = {
    data: []
  };

  static propTypes = {
    data: PropTypes.array.isRequired,
    voteEpisode: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadFilms();
  }

  render() {
    const { data } = this.props;

    return (
      <div className="films-panel">
        <h1>Film list</h1>
        <Films
          {...this.props}
          data={data}
          voteEpisode={this.props.voteEpisode}
        />
      </div>
    );
  }
}

export default FilmsPanel;
