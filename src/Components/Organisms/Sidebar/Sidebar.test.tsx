import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './index';

const mockItems = [
  { id: 1, label: 'Home', href: '/', iconName: 'home' },
  { id: 2, label: 'About', href: '/about', iconName: 'user' },
];

describe('Sidebar Component', () => {
  it('renders all navigation items', () => {
    render(<Sidebar items={mockItems} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders header and footer when provided and not collapsed', () => {
    render(
      <Sidebar
        items={mockItems}
        header={<div>My Header</div>}
        footer={<div>My Footer</div>}
      />
    );
    expect(screen.getByText('My Header')).toBeInTheDocument();
    expect(screen.getByText('My Footer')).toBeInTheDocument();
  });

  it('hides header when collapsed', () => {
    render(
      <Sidebar
        items={mockItems}
        header={<div>My Header</div>}
        isCollapsed={true}
      />
    );
    expect(screen.queryByText('My Header')).not.toBeInTheDocument();
  });

  it('toggles collapsed state when click button is pressed', () => {
    const { container } = render(<Sidebar items={mockItems} />);

    const aside = container.querySelector('aside');
    expect(aside).toHaveClass('lg:w-64');

    const toggleButton = screen.getByRole('button');

    // Check for "Home" text
    expect(screen.getByText('Home')).toBeInTheDocument();

    // Click toggle
    fireEvent.click(toggleButton);

    expect(aside).toHaveClass('lg:w-20');
    // Home text should be hidden when collapsed
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
  });
});
