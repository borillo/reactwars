import React, { Component } from 'react';

import { 
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

import repository from './FilmsRepository';

export default class FilmsPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    }
  }

  componentWillMount() {
    repository.retrieveFilms()
      .then((response) => {
        this.setState({
          films: response.results
        });
      });
  }

  render() {
    return (
      <div>
        <h3>Film list</h3>

        <ListGroup>    
          {
            this.state.films.map((film) => {
              return (
                <ListGroupItem key={film.episode_id}>
                  <div className="film">
                    <div className="title"><strong>{film.title}</strong></div>
                    <div className="episode">Episode {film.episode_id}</div>
                  </div>
                </ListGroupItem>
              );
            })
          }
        </ListGroup>
      </div>
    );
  }
}