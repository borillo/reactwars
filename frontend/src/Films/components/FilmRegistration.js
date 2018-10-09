import React, { Component } from "react";

class FilmRegistration extends Component {
  state = {
    title: null,
    director: null,
    year: null,
    poster: null
  };

  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
  };

  handleChangeDirector = event => {
    this.setState({ director: event.target.value });
  };

  handleChangeYear = event => {
    this.setState({ year: event.target.value });
  };

  handleChangePoster = event => {
    this.setState({ poster: event.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            className="new-film-title"
            placeholder="Title"
            onChange={this.handleChangeTitle}
          />
        </div>
        <div>
          <input
            type="text"
            className="new-film-director"
            placeholder="Director"
            onChange={this.handleChangeDirector}
          />
        </div>
        <div>
          <input
            type="text"
            className="new-film-year"
            placeholder="Year"
            onChange={this.handleChangeYear}
          />
        </div>
        <div>
          <input
            type="text"
            className="new-film-poster"
            placeholder="Poster URL"
            onChange={this.handleChangePoster}
          />
        </div>
        <div>
          <button className="save-new-film" onClick={this.submitForm}>
            Add unofficial film
          </button>
        </div>
      </form>
    );
  }
}

export default FilmRegistration;
