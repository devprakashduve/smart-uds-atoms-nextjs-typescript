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
  });
});
