import React from 'react';
import './projects.css';
import Card from './Card';
import data from './data';

function Projects() {
  const cards = data.map((item) => <Card key={item.id} {...item} />);
  return (
    <div className="projects" id="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects__grid">
        <div className="projects__grid__item">{cards}</div>
      </div>
    </div>
  );
}

export default Projects;
