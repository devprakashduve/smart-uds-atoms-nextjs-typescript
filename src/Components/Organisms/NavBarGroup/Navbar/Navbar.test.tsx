import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './index';

const mockProps = {
  logo: '/images/avatar.jpg',
  links: [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Profile', href: '/profile' },
    { name: 'Settings', href: '/settings' },
    { name: 'Logout', href: '/logout' },
  ],
};

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar {...mockProps} />);
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the links', () => {
    render(<Navbar {...mockProps} />);
    mockProps.links.forEach((link) => {
      const linkElement = screen.getByText(link.name);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
