import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogHomePage from './index';

// Mock Next.js Link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('BlogHomePage', () => {
  it('renders without crashing', () => {
    render(<BlogHomePage />);
    expect(screen.getAllByText('TechBlog')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Building Scalable Design Systems with Atomic Design')[0]).toBeInTheDocument();
  });

  it('renders article list', () => {
    render(<BlogHomePage />);
    expect(screen.getAllByText('Getting Started with Next.js 14')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Mastering TypeScript in 2026')[0]).toBeInTheDocument();
  });
});
