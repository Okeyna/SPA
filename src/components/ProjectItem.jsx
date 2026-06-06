import React from 'react';
import '../styles/ProjectItem.css';

const ProjectItem = ({ project }) => {

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  };
  
  return (
    <div className="project-item" onClick={handleClick} style={{ cursor: project.link ? 'pointer' : 'default' }}>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
    </div>
  );
};

export default ProjectItem;