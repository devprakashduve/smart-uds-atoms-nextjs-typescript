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
    expect(screen.getByTestId('posts')).toBeInTheDocument();
  });

  it('renders without optional featuredPost', () => {
    const { featuredPost, ...rest } = mockProps;
    render(<BlogTemplate {...rest} />);
    expect(screen.queryByTestId('featured')).not.toBeInTheDocument();
    expect(screen.getByTestId('posts')).toBeInTheDocument();
  });

  it('renders without optional footer', () => {
    const { footer, ...rest } = mockProps;
    render(<BlogTemplate {...rest} />);
    expect(screen.queryByTestId('footer')).not.toBeInTheDocument();
  });

  it('renders without header (no top bar)', () => {
    render(<BlogTemplate posts={<div data-testid="posts">Posts</div>} />);
    expect(screen.queryByRole('banner')).not.toBeInTheDocument();
    expect(screen.getByTestId('posts')).toBeInTheDocument();
  });

  it('supports megaMenu prop as backward-compatible header slot', () => {
    render(
      <BlogTemplate
        megaMenu={<div data-testid="mega-menu">MegaMenu</div>}
        posts={<div data-testid="posts">Posts</div>}
      />
    );
    expect(screen.getByTestId('mega-menu')).toBeInTheDocument();
  });

  it('prefers header over megaMenu when both are provided', () => {
    render(
      <BlogTemplate
        header={<div data-testid="header-slot">Header</div>}
        megaMenu={<div data-testid="mega-menu-slot">MegaMenu</div>}
        posts={<div data-testid="posts">Posts</div>}
      />
    );
    expect(screen.getByTestId('header-slot')).toBeInTheDocument();
    expect(screen.queryByTestId('mega-menu-slot')).not.toBeInTheDocument();
  });
});
