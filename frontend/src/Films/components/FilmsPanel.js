import React, { Component } from "react";
import PropTypes from "prop-types";

import Films from "./Films";
import UnofficialFilms from "./UnofficialFilms";
import FilmRegistration from "./FilmRegistration";

class FilmsPanel extends Component {
  static getDefaultProps = {
    films: [],
    unofficialFilms: []
  };

  static propTypes = {
    films: PropTypes.array.isRequired,
    unofficialFilms: PropTypes.array,
    voteEpisode: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadFilms();
  }

  render() {
    const { films, unofficialFilms } = this.props;

    return (
      <div className="films-panel">
        <h1>Film list</h1>

        <Films
          {...this.props}
          data={films}
          voteEpisode={this.props.voteEpisode}
        />

        {unofficialFilms.length > 0 && (
          <div>
            <h1>Unofficial Film list</h1>

            <UnofficialFilms {...this.props} data={unofficialFilms} />
          </div>
        )}

        <h1>Add a new film to the unofficial list:</h1>

        <FilmRegistration onSubmit={this.props.registerEpisode} />
      </div>
    );
  }
}

export default FilmsPanel;
