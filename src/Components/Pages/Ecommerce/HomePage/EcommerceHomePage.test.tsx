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
    expect(screen.getByText('TechStore')).toBeInTheDocument();
    expect(screen.getAllByText('Summer Tech Sale')[0]).toBeInTheDocument();
  });

  it('renders products from mock data', () => {
    render(<EcommerceHomePage />);
    expect(screen.getByText('Premium Wireless Headphones')).toBeInTheDocument();
    expect(screen.getByText('Smart Watch Pro')).toBeInTheDocument();
  });
});
