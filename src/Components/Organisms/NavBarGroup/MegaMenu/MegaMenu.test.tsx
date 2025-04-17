import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MegaMenu from './index';
import { MegaMenuProps } from './MegaMenu.interface';
import Icon from '@/Components/Atoms/Icon'; // Import Icon for login link

// Mock data similar to storybook
const mockData: MegaMenuProps = {
  logo: {
    src: '/images/mock-logo.svg',
    alt: 'Mock Logo',
    href: '/home',
  },
  topBarLinks: {
    contact: { name: 'Contact', href: '/contact' },
    language: { name: 'FR', href: '/lang/fr' },
    login: {
      name: 'User Login',
      href: '/login',
      icon: <Icon name="userCircle" variant="outline" className="size-5" />,
    },
  },
  navigation: [
    {
      name: 'PRODUCTS',
      href: '/products',
      megaMenuColumns: [
        {
          heading: 'Area 1',
          items: [{ name: 'Link 1', href: '/link1' }],
        },
        {
          heading: 'Area 2',
          items: [{ name: 'Link 2', href: '/link2' }],
        },
      ],
    },
    {
      name: 'SUPPORT',
      href: '/support',
      // No mega menu
    },
    {
      name: 'ABOUT',
      href: '/about',
      megaMenuColumns: [
        {
          items: [
            { name: 'About Us', href: '/about-us' },
            { name: 'Careers', href: '/careers' },
          ],
        },
      ],
    },
  ],
  onSearchClick: jest.fn(),
};

describe('MegaMenu Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  test('renders correctly with required props', () => {
    render(<MegaMenu {...mockData} />);

    // Check logo
    expect(screen.getByAltText('Mock Logo')).toBeInTheDocument();

    // Check top bar links
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('FR')).toBeInTheDocument();
    expect(screen.getByText('User Login')).toBeInTheDocument();

    // Check navigation links
    expect(screen.getByText('PRODUCTS')).toBeInTheDocument();
    expect(screen.getByText('SUPPORT')).toBeInTheDocument();
    expect(screen.getByText('ABOUT')).toBeInTheDocument();

    // Check search icon button
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();
    // Check mobile menu icon button (present but visually hidden on large screens)
    expect(screen.getByRole('button', { name: /Open main menu/i })).toBeInTheDocument();
  });

  test('calls onSearchClick when search icon is clicked', () => {
    render(<MegaMenu {...mockData} />);
    const searchButton = screen.getByRole('button', { name: /Search/i });
    fireEvent.click(searchButton);
    expect(mockData.onSearchClick).toHaveBeenCalledTimes(1);
  });

  test('shows mega menu panel on hover and hides on leave', async () => {
    render(<MegaMenu {...mockData} />);

    const productsLink = screen.getByText('PRODUCTS');
    const supportLink = screen.getByText('SUPPORT'); // A link without a panel

    // Panel should not be visible initially
    expect(screen.queryByText('Area 1')).not.toBeInTheDocument();

    // Hover over PRODUCTS
    fireEvent.mouseEnter(productsLink);

    // Wait for panel to appear (considering potential delays)
    await waitFor(() => {
      expect(screen.getByText('Area 1')).toBeInTheDocument();
      expect(screen.getByText('Link 1')).toBeInTheDocument();
      expect(screen.getByText('Area 2')).toBeInTheDocument();
      expect(screen.getByText('Link 2')).toBeInTheDocument();
    });

    // Move mouse away from PRODUCTS link (to trigger leave delay)
    fireEvent.mouseLeave(productsLink);

    // Wait for panel to disappear after delay
    await waitFor(() => {
      expect(screen.queryByText('Area 1')).not.toBeInTheDocument();
    }, { timeout: 300 }); // Wait longer than the leave delay

     // Hover over SUPPORT (should not show panel)
    fireEvent.mouseEnter(supportLink);
    await waitFor(() => {
        // No easy way to check for *no* panel appearance, 
        // but ensure PRODUCT panel items didn't reappear
        expect(screen.queryByText('Area 1')).not.toBeInTheDocument();
    }, {timeout: 200}); // Shorter wait, nothing should happen

  });

  test('keeps panel open when moving mouse from link to panel', async () => {
    render(<MegaMenu {...mockData} />);
    const productsLink = screen.getByText('PRODUCTS');

    // Hover over PRODUCTS to show panel
    fireEvent.mouseEnter(productsLink);
    const panelHeading = await screen.findByText('Area 1'); // Panel is visible
    const panelElement = panelHeading.closest('div[class*="absolute"]'); // Find the panel container
    expect(panelElement).toBeInTheDocument(); 

    // Simulate moving mouse off link (triggers leave timeout)
    fireEvent.mouseLeave(productsLink);
    
    // Immediately simulate moving mouse onto the panel (cancels leave timeout)
    if (panelElement) {
        fireEvent.mouseEnter(panelElement);
    }

    // Wait a bit longer than the hide delay - panel should still be visible
    await new Promise(r => setTimeout(r, 200)); 
    expect(screen.getByText('Area 1')).toBeInTheDocument();

    // Now move mouse out of panel to hide it
    if (panelElement) {
        fireEvent.mouseLeave(panelElement);
    }
    await waitFor(() => {
        expect(screen.queryByText('Area 1')).not.toBeInTheDocument();
    }, { timeout: 300 });

  });

}); 