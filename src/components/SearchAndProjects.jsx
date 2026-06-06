import React, { useState } from 'react';
import ProjectList from './ProjectList';
import '../styles/SearchAndProjects.css';

const SearchAndProjects = ({ projects }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-projects-card">
      <h2 className="section-title">Search Projects</h2>
      <input
        type="text"
        placeholder="Search by title or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
};

export default SearchAndProjects;