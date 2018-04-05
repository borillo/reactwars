import React from 'react';

const AboutPanel = () => {
  const teachers = [ 'Óscar Belmonte', 'Reyes Grangel', 'Ricardo Borillo' ];
  
  return (
    <div className="panel-about">
      <h1>This is ReactWars app!!</h1>
      <p>A hello world application build on top of React v16. Meet the team:</p>

      <ul className="teachers">
        {
          teachers.map((teacher) => {
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

export default AboutPanel;