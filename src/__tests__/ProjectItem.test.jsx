import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectItem from '../components/ProjectItem';

describe('ProjectItem Component', () => {
  const mockProject = {
    id: 1,
    title: 'Test Project',
    description: 'This is a test description',
  };

  test('renders project title', () => {
    render(<ProjectItem project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  test('renders project description', () => {
    render(<ProjectItem project={mockProject} />);
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  test('has correct CSS classes', () => {
    const { container } = render(<ProjectItem project={mockProject} />);
    
    expect(container.firstChild).toHaveClass('project-item');
    expect(screen.getByText('Test Project')).toHaveClass('project-title');
    expect(screen.getByText('This is a test description')).toHaveClass('project-description');
  });
});