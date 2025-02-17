import { render, screen } from '@testing-library/react';
import List from '.';
import { ListProps } from './ListProps.interface';

const mockItems: ListProps['items'] = [
  {
    name: 'Dev',
    subText: 'Software Engineer',
    avatar: '/images/avatar.jpg',
    role: 'Developer',
    status: 'Online',
  },
  {
    name: 'Dubey',
    subText: 'Product Manager',
    role: 'Manager',
    lastSeen: '2024-02-18T12:00:00Z',
  },
  {
    name: 'Siddhant',
    subText: 'Designer',
    status: 'Offline',
  },
];

describe('List Component', () => {
  it('renders without crashing', () => {
    render(<List items={mockItems} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('renders the correct number of list items', () => {
    render(<List items={mockItems} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(mockItems.length);
  });

  it('does not render ordered numbers when ordered is false', () => {
    render(<List items={mockItems} ordered={false} />);
    mockItems.forEach((_, index) => {
      expect(screen.queryByText(index + 1)).not.toBeInTheDocument();
    });
  });

  it('renders avatars correctly', () => {
    render(<List items={mockItems} />);
    expect(screen.getByAltText('Dev')).toBeInTheDocument();
  });

  it('renders names and subText correctly', () => {
    render(<List items={mockItems} />);
    expect(screen.getByText('Dev')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Product Manager')).toBeInTheDocument();
  });

  it('renders roles when provided', () => {
    render(<List items={mockItems} />);
    expect(screen.getByText('Developer')).toBeInTheDocument();
    expect(screen.getByText('Manager')).toBeInTheDocument();
  });

  it('renders status when provided', () => {
    render(<List items={mockItems} />);
    expect(screen.getByText('Online')).toBeInTheDocument();
    expect(screen.getByText('Offline')).toBeInTheDocument();
  });

  it('renders last seen text when status is missing', () => {
    render(<List items={mockItems} />);
    expect(screen.getByText(/Last seen/)).toBeInTheDocument();
  });
});
