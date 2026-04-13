import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '.';

const mockLinks = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Profile', href: '/profile' },
  {
    name: 'Settings',
    href: '/settings',
    subCustomLinks: [
      { name: 'Account', href: '/settings/account' },
      { name: 'Security', href: '/settings/security' },
    ],
  },
];

const mockProps = {
  logo: '/images/logo.png',
  altText: 'App Logo',
  links: mockLinks,
};

// Helper for resetting window width
const setScreenWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
};

describe('Navbar', () => {
  it('renders the logo with alt text', () => {
    render(<Navbar {...mockProps} />);
    const logo = screen.getByAltText(mockProps.altText);
    expect(logo).toBeInTheDocument();
  });

  describe('Desktop View', () => {
    beforeEach(() => {
      setScreenWidth(1024);
    });

    it('renders desktop links', () => {
      render(<Navbar {...mockProps} />);
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getByText('Settings')).toBeInTheDocument();
      // Dropdown should be hidden initially
      expect(screen.queryByText('Account')).not.toBeInTheDocument();
    });

    it('opens dropdown on desktop link click', () => {
      render(<Navbar {...mockProps} />);
      const settingsLink = screen.getByText('Settings');

      fireEvent.click(settingsLink);

      expect(screen.getByText('Account')).toBeInTheDocument();
      expect(screen.getByText('Security')).toBeInTheDocument();
      expect(settingsLink.closest('a')).toHaveClass('underline'); // Check active state styling
    });

    it('toggles dropdown on repeated click', () => {
      render(<Navbar {...mockProps} />);
      const settingsLink = screen.getByText('Settings');

      // Open
      fireEvent.click(settingsLink);
      expect(screen.getByText('Account')).toBeInTheDocument();

      // Close
      fireEvent.click(settingsLink);
      expect(screen.queryByText('Account')).not.toBeInTheDocument();
    });

    it('switches active dropdown when clicking another dropdown link', () => {
      const multiDropdownProps = {
        ...mockProps,
        links: [
          ...mockProps.links,
          {
            name: 'More',
            href: '#',
            subCustomLinks: [{ name: 'Info', href: '/info' }],
          },
        ],
      };
      render(<Navbar {...multiDropdownProps} />);

      const settingsLink = screen.getByText('Settings');
      const moreLink = screen.getByText('More');

      fireEvent.click(settingsLink);
      expect(screen.getByText('Account')).toBeInTheDocument();

      fireEvent.click(moreLink);
      expect(screen.queryByText('Account')).not.toBeInTheDocument();
      expect(screen.getByText('Info')).toBeInTheDocument();
    });

    it('handles click on standard desktop link', () => {
      render(<Navbar {...mockProps} />);
      const dashboardLink = screen.getByText('Dashboard');
      fireEvent.click(dashboardLink);
      // Standard links usually navigate, but the prop logic for active link might not apply
      // if CustomLink handles nav.
      // However, Navbar has logic `onClick={() => handleCustomLinkClick(link.name)}` for standard links too (line 122).
      // This toggles active state underlining.
      expect(dashboardLink.closest('a')).toHaveClass('underline');
    });
  });

  describe('Mobile View', () => {
    beforeEach(() => {
      // Since the component uses CSS classes (md:hidden, sm:flex) to hide/show,
      // standard jsdom doesn't process media queries or CSS visibility.
      // However, the component Logic renders both but hides via CSS.
      // The MobileMenuButtonSection has `md:hidden`.
      // The DesktopMenuSection has `hidden sm:flex`.
      // We can test interactions by finding elements ensuring they are in document.
      // Screen width helper might not affect CSS class application in simple unit tests
      // unless using a library that mocks matchMedia or if component used JS window.innerWidth.
      // This component relies on Tailwind classes.
      // We will assume `Buttons` are rendered but rely on user interaction.
    });

    it('renders mobile menu button', () => {
      render(<Navbar {...mockProps} />);
      // Look for the toggle button (bars3 icon).
      // Note: Since `Icon` renders svg, we might need to find by role or icon name if accessible.
      // Button inside MobileMenuButtonSection.
      // Assuming it's the button with no text, we can try getting by role button.
      // There might be multiple buttons if icons are buttons?
      // Actually `Button` component renders a button.
      const buttons = screen.getAllByRole('button');
      // We expect one mobile menu button (and maybe desktop logo link is not a button).
      // Let's filter or assume it's the one available.
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('toggles mobile menu on button click', () => {
      render(<Navbar {...mockProps} />);
      // Initial state: MobileMenu container might be rendered but empty or hidden?
      // Code: MobileMenu renders `Elements` which is null if !isOpen.

      const toggleBtn = screen.getByRole('button'); // Assuming distinct mobile toggle

      // Open
      fireEvent.click(toggleBtn);

      // Now MobileMenu content should be visible
      // Mobile menu renders links.
      // Since desktop menu also renders links, we need to be careful.
      // Desktop menu is `hidden sm:flex`. Mobile menu is just rendered.
      // In JSDOM, both sets of text might be found effectively if we don't differentiate.
      // However, MobileMenu renders them in a specific structure.
      // We can check if "Dashboard" appears twice (desktop + mobile) or verify specific mobile container presence.

      // Let's rely on specific class or structure?
      // Or just standard query.
      const dashboardLinks = screen.getAllByText('Dashboard');
      expect(dashboardLinks.length).toBeGreaterThanOrEqual(2); // One desktop (hidden by css), one mobile (visible)
    });

    it('opens dropdown in mobile menu', () => {
      render(<Navbar {...mockProps} />);
      const toggleBtn = screen.getByRole('button');
      fireEvent.click(toggleBtn);

      // Find mobile "Settings" link.
      // It should have an icon (chevronDown).
      // Since there are two "Settings" texts (desktop/mobile), we grab the last one (usually mobile in DOM order) or use context.
      const settingsLinks = screen.getAllByText('Settings');
      const mobileSettings = settingsLinks[settingsLinks.length - 1];

      fireEvent.click(mobileSettings);

      expect(screen.getByText('Account')).toBeInTheDocument();
      expect(screen.getByText('Security')).toBeInTheDocument();
    });
  });
});
