import React, { Component } from "react";

import repository from "./FilmsRepository";

export default class FilmsPanel extends Component {
  state = {
    films: []
  };

  componentDidMount() {
    repository.retrieveFilms().then(films => {
      this.setState({ films });
    });
  }

  render() {
    return (
      <div>
        <h1 className="section-title">Film list</h1>

        <div className="films">
          {this.state.films.map(film => {
            return (
              <div key={film.episode}>
                <div className="film">
                  <div className="title">
                    <strong>{film.title}</strong>
                  </div>
                  <div className="episode">Episode {film.episode}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
