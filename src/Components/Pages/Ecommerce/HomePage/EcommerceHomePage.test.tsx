import React from 'react';
import { render, screen } from '@testing-library/react';
import EcommerceHomePage from './index';

// Mock Next.js Link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('EcommerceHomePage', () => {
  it('renders without crashing', () => {
    render(<EcommerceHomePage />);
    // Hero section headline is always rendered
    expect(screen.getAllByText('Summer Tech Sale')[0]).toBeInTheDocument();
  });

  it('renders products from mock data', () => {
    render(<EcommerceHomePage />);
    expect(screen.getByText('Premium Wireless Headphones')).toBeInTheDocument();
    expect(screen.getByText('Smart Watch Pro')).toBeInTheDocument();
  });

  it('renders category filter buttons', () => {
    render(<EcommerceHomePage />);
    // The "All" category filter is always present as a button
    const allButtons = screen.getAllByRole('button', { name: /^all$/i });
    expect(allButtons.length).toBeGreaterThan(0);
  });

  it('renders the navigation bar', () => {
    render(<EcommerceHomePage />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders hero CTA buttons', () => {
    render(<EcommerceHomePage />);
    expect(screen.getByRole('button', { name: /shop now/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /view deals/i })).toBeInTheDocument();
  });
});
