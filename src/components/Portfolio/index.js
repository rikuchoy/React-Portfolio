import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'pokedexpert',
      description: 'HTML/CSS/JavaScript',
      link: "https://rikuchoy.github.io/Pokedexpert/",
      repo: "https://github.com/rikuchoy/Pokedexpert"
    },
    {
      name: 'gameshare',
      description: 'RESTful API, Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Bootstrap',
      link: "https://gameshare-97b263a86cef.herokuapp.com/",
      repo: "https://github.com/rikuchoy/GameShare"
    },
    {
      name: 'eventfull',
      description: 'MERN Stack, Styled-Components',
      link: "https://rikuchoy.github.io/Eventfull/",
      repo: "https://eventfull-c6ee6f293464.herokuapp.com/"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
