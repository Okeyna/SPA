import React from 'react';
import ProjectItem from './ProjectItem';
import '../styles/ProjectList.css';

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return <p className="no-results">No projects found.</p>;
  }

  return (
    <div className="projects-list">
      {projects.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;