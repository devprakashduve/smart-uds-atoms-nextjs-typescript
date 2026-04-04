import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialFeedPage from './index';

// Mock Next.js Link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('SocialFeedPage', () => {
  it('renders without crashing', () => {
    render(<SocialFeedPage />);
    expect(screen.getByText('SocialHub')).toBeInTheDocument();
    expect(screen.getByPlaceholderText("What's on your mind?")).toBeInTheDocument();
  });

  it('renders feed posts', () => {
    render(<SocialFeedPage />);
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
    expect(screen.getByText('Mike Chen')).toBeInTheDocument();
  });
});
