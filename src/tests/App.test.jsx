import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders the main header', () => {
    expect(screen.getByText('Personal Project Showcase App')).toBeInTheDocument();
  });

  test('renders Add Project section', () => {
    expect(screen.getByText('Add Project')).toBeInTheDocument();
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  test('renders Search Projects section', () => {
    expect(screen.getByText('Search Projects')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search by title or description/i)).toBeInTheDocument();
  });

  test('displays initial projects', () => {
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
    expect(screen.getByText('Project 3')).toBeInTheDocument();
    
    const descriptions = screen.getAllByText('Description of the project');
    expect(descriptions).toHaveLength(3);
  });

  test('can add a new project', async () => {
    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const addButton = screen.getByRole('button', { name: /add/i });

    await userEvent.type(titleInput, 'New Test Project');
    await userEvent.type(descriptionInput, 'This is a test project description');
    await userEvent.click(addButton);

    expect(screen.getByText('New Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  test('does not add empty project', async () => {
    const initialProjects = screen.getAllByText(/Project \d/);
    const initialCount = initialProjects.length;

    const addButton = screen.getByRole('button', { name: /add/i });
    await userEvent.click(addButton);

    const currentProjects = screen.getAllByText(/Project \d/);
    expect(currentProjects.length).toBe(initialCount);
  });

  test('filters projects based on search term', async () => {
    const searchInput = screen.getByPlaceholderText(/search by title or description/i);
    
    await userEvent.type(searchInput, 'Project 1');
    
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.queryByText('Project 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Project 3')).not.toBeInTheDocument();
  });

  test('shows no results message when no projects match search', async () => {
    const searchInput = screen.getByPlaceholderText(/search by title or description/i);
    
    await userEvent.type(searchInput, 'Nonexistent Project');
    
    expect(screen.getByText('No projects found.')).toBeInTheDocument();
  });
});