import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialMediaTemplate from './index';

describe('SocialMediaTemplate', () => {
  const mockProps = {
    header: <div data-testid="header">Header</div>,
    leftSidebar: <div data-testid="left">Left</div>,
    feed: <div data-testid="feed">Feed</div>,
    rightSidebar: <div data-testid="right">Right</div>,
    mobileNav: <div data-testid="mobile">Mobile</div>,
  };

  it('renders all slots correctly', () => {
    render(<SocialMediaTemplate {...mockProps} />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('left')).toBeInTheDocument();
    expect(screen.getByTestId('feed')).toBeInTheDocument();
    expect(screen.getByTestId('right')).toBeInTheDocument();
    expect(screen.getByTestId('mobile')).toBeInTheDocument();
  });

  it('renders with only feed and header', () => {
    render(<SocialMediaTemplate header={mockProps.header} feed={mockProps.feed} />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('feed')).toBeInTheDocument();
    expect(screen.queryByTestId('left')).not.toBeInTheDocument();
    expect(screen.queryByTestId('right')).not.toBeInTheDocument();
    expect(screen.queryByTestId('mobile')).not.toBeInTheDocument();
  });

  it('renders with only the required feed slot', () => {
    render(<SocialMediaTemplate feed={<div data-testid="feed">Feed</div>} />);
    expect(screen.getByTestId('feed')).toBeInTheDocument();
    expect(screen.queryByRole('banner')).not.toBeInTheDocument();
  });

  it('supports megaMenu prop as backward-compatible header slot', () => {
    render(
      <SocialMediaTemplate
        megaMenu={<div data-testid="mega-menu">MegaMenu</div>}
        feed={<div data-testid="feed">Feed</div>}
      />
    );
    expect(screen.getByTestId('mega-menu')).toBeInTheDocument();
  });

  it('prefers header over megaMenu when both are provided', () => {
    render(
      <SocialMediaTemplate
        header={<div data-testid="header-slot">Header</div>}
        megaMenu={<div data-testid="mega-menu-slot">MegaMenu</div>}
        feed={<div data-testid="feed">Feed</div>}
      />
    );
    expect(screen.getByTestId('header-slot')).toBeInTheDocument();
    expect(screen.queryByTestId('mega-menu-slot')).not.toBeInTheDocument();
  });

  it('renders without optional sidebars', () => {
    render(<SocialMediaTemplate feed={<div data-testid="feed">Feed</div>} />);
    expect(screen.queryByTestId('left')).not.toBeInTheDocument();
    expect(screen.queryByTestId('right')).not.toBeInTheDocument();
  });

  it('renders without optional mobileNav', () => {
    render(<SocialMediaTemplate feed={<div data-testid="feed">Feed</div>} />);
    expect(screen.queryByTestId('mobile')).not.toBeInTheDocument();
  });
});
