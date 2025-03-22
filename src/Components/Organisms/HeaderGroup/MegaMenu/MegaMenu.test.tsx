import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MegaMenu from './index';
import { MegaMenuProps } from './MegaMenu.interface';

const defaultProps: MegaMenuProps = {
  logo: '/images/logo.png',
  logoHref: 'https://uds.com',
  menuItems: [
    { label: 'Start', href: '#' },
    {
      label: 'Menus',
      children: [
        { label: 'Store', href: '#' },
        { label: 'Audience', href: '#' },
        { label: 'Email', href: '#' },
        { label: 'Store 2', href: '#' },
      ],
    },
    { label: 'Products', href: '#' },
    { label: 'Help', href: '#' },
  ],
  dropdownLinks: [
    { label: 'Store', href: '#' },
    { label: 'Audience', href: '#' },
    { label: 'Email', href: '#' },
    { label: 'Store', href: '#' },
  ],
  contact: 'Support',
  contactHref: '#contact',
  previewDashboard: 'New Dashboard',
  previewDashboardHref: '#dashboard',
  getStarted: 'Go',
  udsLogoAlt: 'uds Logo',
  udsText: 'uds',
  backgroundImage: '/images/avatar.jpg',
};

describe('MegaMenu Component', () => {
  it('renders without crashing', () => {
    render(<MegaMenu {...defaultProps} />);
  });

  it('renders logo and UDS text correctly', () => {
    render(<MegaMenu {...defaultProps} />);
    const logoElement = screen.getByAltText(/uds Logo|logo/i);
    const udsTextElement = screen.getByText(/uds/i);

    expect(logoElement).toBeInTheDocument();
    expect(udsTextElement).toBeInTheDocument();
  });

  it('renders menu items correctly', () => {
    render(<MegaMenu {...defaultProps} />);
    const startMenuElement = screen.getByText(/Start/i);
    const productsMenuElement = screen.getByText(/Products/i);
    expect(startMenuElement).toBeInTheDocument();
    expect(productsMenuElement).toBeInTheDocument();
  });

  it('renders dropdown links correctly', () => {
    render(<MegaMenu {...defaultProps} />);
    const storeLinkElement = screen.getByText(/Store/i);
    expect(storeLinkElement).toBeInTheDocument();
  });

  it('renders contact link correctly', () => {
    render(<MegaMenu {...defaultProps} />);
    const contactLinkElement = screen.getByText(/Support/i);
    expect(contactLinkElement).toBeInTheDocument();
  });

  it('renders preview dashboard section correctly', () => {
    render(<MegaMenu {...defaultProps} />);
    const previewDashboardElement = screen.getByText(/New Dashboard/i);
    const getStartedButtonElement = screen.getByText(/Go/i);

    expect(previewDashboardElement).toBeInTheDocument();
    expect(getStartedButtonElement).toBeInTheDocument();
  });

  it('toggles mobile menu when the toggle button is clicked', () => {
    render(<MegaMenu {...defaultProps} />);
    const toggleButton = screen.getByRole('button', {
      name: /mega-atom-menu-full-image/i,
    });
    fireEvent.click(toggleButton);
  });

  it('toggles dropdown menu when the dropdown button is clicked', () => {
    render(<MegaMenu {...defaultProps} />);
    const dropdownButton = screen.getByRole('button', {
      name: /menus/i,
    });
    fireEvent.click(dropdownButton);
  });
});
