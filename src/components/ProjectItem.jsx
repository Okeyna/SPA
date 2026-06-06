import React from 'react';
import '../styles/ProjectItem.css';

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
    </div>
  );
};

export default ProjectItem;