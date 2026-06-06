import React, { useState } from 'react';
import '../styles/AddProjectForm.css';

const AddProjectForm = ({ onAddProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '') return;
    onAddProject(title, description, link);
    setTitle('');
    setDescription('');
    setLink('');
  };

  return (
    <div className="add-project-card">
      <h2 className="section-title">Add Project</h2>
      <form onSubmit={handleSubmit} className="add-project-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
            placeholder="Enter project title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-input form-textarea"
            placeholder="Enter project description"
            rows={3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="link" className="form-label">Link</label>
          <input
            id="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="form-input"
            placeholder="Enter project link"
          />
        </div>
        <button type="submit" className="submit-button">Add</button>
      </form>
    </div>
  );
};

export default AddProjectForm;