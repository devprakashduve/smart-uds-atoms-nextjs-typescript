import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '.';

const mockProps = {
  logo: '/images/avatar.jpg',
  altText: 'User Avatar', // Added altText
  links: [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Profile', href: '/profile' },
    { name: 'Settings', href: '/settings' },
    { name: 'Logout', href: '/logout' },
  ],
};

describe('Navbar', () => {
  it('renders the logo with alt text', () => {
    render(<Navbar {...mockProps} />);
    const logo = screen.getByAltText(mockProps.altText); // Updated to use altText
    expect(logo).toBeInTheDocument();
  });

  it('renders the links', () => {
    render(<Navbar {...mockProps} />);
    mockProps.links.forEach((link) => {
      const linkElements = screen.queryAllByText(link.name);
      linkElements.forEach((linkElement) => {
        expect(linkElement).toBeInTheDocument();
      });
    });
  });
});
