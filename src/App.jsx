import React, { useState } from 'react';
import Header from './components/Header';
import AddProjectForm from './components/AddProjectForm';
import SearchAndProjects from './components/SearchAndProjects';
import './styles/App.css';

const App = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Project 1', description: 'Description of the project', link: '' },
    { id: 2, title: 'Project 2', description: 'Description of the project', link: '' },
    { id: 3, title: 'Project 3', description: 'Description of the project', link: '' },
    { id: 4, title: 'Wordly', description: 'Wordly is a simple interactive dictionary web app that looks up English words using the Dictionary API and displays definitions, pronunciations, synonyms, antonyms, and audio pronunciation playback.', link: 'https://okeyna.github.io/wordly/'},
  ]);

  const addProject = (title, description) => {
    const newProject = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      link: '',
    };
    setProjects([newProject, ...projects]);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="app-main-content">
        <AddProjectForm onAddProject={addProject} />
        <SearchAndProjects projects={projects} />
      </div>
    </div>
  );
};

export default App;