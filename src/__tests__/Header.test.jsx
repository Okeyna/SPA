import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  test('renders header text', () => {
    render(<Header />);
    expect(screen.getByText('Personal Project Showcase App')).toBeInTheDocument();
  });

  test('has correct CSS class', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toHaveClass('header');
  });

  test('renders as header element', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });
});