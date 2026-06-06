import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectList from '../components/ProjectList';

describe('ProjectList Component', () => {
  const mockProjects = [
    { id: 1, title: 'Project Alpha', description: 'First project' },
    { id: 2, title: 'Project Beta', description: 'Second project' },
  ];

  test('renders list of projects', () => {
    render(<ProjectList projects={mockProjects} />);
    
    expect(screen.getByText('Project Alpha')).toBeInTheDocument();
    expect(screen.getByText('Project Beta')).toBeInTheDocument();
    expect(screen.getByText('First project')).toBeInTheDocument();
    expect(screen.getByText('Second project')).toBeInTheDocument();
  });

  test('renders correct number of projects', () => {
    render(<ProjectList projects={mockProjects} />);
    
    const projectTitles = screen.getAllByText(/Project \w+/);
    expect(projectTitles).toHaveLength(2);
  });

  test('shows no results message for empty array', () => {
    render(<ProjectList projects={[]} />);
    
    expect(screen.getByText('No projects found.')).toBeInTheDocument();
  });

  test('renders nothing when projects is empty', () => {
    render(<ProjectList projects={[]} />);
    
    expect(screen.getByText('No projects found.')).toBeInTheDocument();
  });
});