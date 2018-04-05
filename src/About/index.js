import React, { Component } from 'react';

import repository from './AboutRepository';

export default class AboutPanel extends Component {
  state = {
    teachers: [],
  };

  componentDidMount() {
    repository.retrieveAbout()
      .then(({ teachers }) => {
        this.setState({ teachers });
      });
  }

  render() {
    return (
      <div>
        <h1>This is ReactWars app!!</h1>
        <p>A hello world application build on top of React v16. Meet the team:</p>

        <ul className="teachers">
          {
            this.state.teachers.map((teacher) => {
              return (
                <li key={teacher} className="teacher">{teacher}</li>
              );
            })
          }
        </ul>

        <button>Feel the force!!</button>
      </div>
    );
  }
}