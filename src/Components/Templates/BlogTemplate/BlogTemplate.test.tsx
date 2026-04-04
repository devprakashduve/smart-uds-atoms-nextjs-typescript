import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogTemplate from './index';

describe('BlogTemplate', () => {
  const mockProps = {
    header: <div data-testid="header">Header</div>,
    featuredPost: <div data-testid="featured">Featured</div>,
    posts: <div data-testid="posts">Posts</div>,
    sidebar: <div data-testid="sidebar">Sidebar</div>,
    footer: <div data-testid="footer">Footer</div>,
  };

  it('renders all slots correctly', () => {
    render(<BlogTemplate {...mockProps} />);
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('featured')).toBeInTheDocument();
    expect(screen.getByTestId('posts')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders without optional sidebar', () => {
    const { sidebar, ...rest } = mockProps;
    render(<BlogTemplate {...rest} />);
    expect(screen.queryByTestId('sidebar')).not.toBeInTheDocument();
  });
});
