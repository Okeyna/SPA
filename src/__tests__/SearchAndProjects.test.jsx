import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchAndProjects from '../components/SearchAndProjects';

describe('SearchAndProjects Component', () => {
  const mockProjects = [
    { id: 1, title: 'React App', description: 'A React application' },
    { id: 2, title: 'Vue Project', description: 'A Vue.js project' },
    { id: 3, title: 'Angular App', description: 'An Angular application' },
  ];

  beforeEach(() => {
    render(<SearchAndProjects projects={mockProjects} />);
  });

  test('renders search input', () => {
    expect(screen.getByPlaceholderText(/search by title or description/i)).toBeInTheDocument();
  });

  test('displays all projects initially', () => {
    expect(screen.getByText('React App')).toBeInTheDocument();
    expect(screen.getByText('Vue Project')).toBeInTheDocument();
    expect(screen.getByText('Angular App')).toBeInTheDocument();
  });

  test('filters projects by title', async () => {
    const searchInput = screen.getByPlaceholderText(/search by title or description/i);
    
    await userEvent.type(searchInput, 'React');
    
    expect(screen.getByText('React App')).toBeInTheDocument();
    expect(screen.queryByText('Vue Project')).not.toBeInTheDocument();
    expect(screen.queryByText('Angular App')).not.toBeInTheDocument();
  });

  test('filters projects by description', async () => {
    const searchInput = screen.getByPlaceholderText(/search by title or description/i);
    
    await userEvent.type(searchInput, 'Vue.js');
    
    expect(screen.getByText('Vue Project')).toBeInTheDocument();
    expect(screen.queryByText('React App')).not.toBeInTheDocument();
    expect(screen.queryByText('Angular App')).not.toBeInTheDocument();
  });

  test('is case insensitive', async () => {
    const searchInput = screen.getByPlaceholderText(/search by title or description/i);
    
    await userEvent.type(searchInput, 'react');
    
    expect(screen.getByText('React App')).toBeInTheDocument();
  });

  test('shows no results message when no matches', async () => {
    const searchInput = screen.getByPlaceholderText(/search by title or description/i);
    
    await userEvent.type(searchInput, 'Nonexistent');
    
    expect(screen.getByText('No projects found.')).toBeInTheDocument();
  });

  test('handles empty projects array', () => {
    render(<SearchAndProjects projects={[]} />);
    
    expect(screen.getByText('No projects found.')).toBeInTheDocument();
  });
});