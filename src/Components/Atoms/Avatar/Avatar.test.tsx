import { render, screen } from '@testing-library/react';
import Avatar from '.';

describe('Avatar Component', () => {
  it('renders initials when no src is provided', () => {
    render(<Avatar initials="AB" />);
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('renders default initials when no src or initials are provided', () => {
    render(<Avatar />);
    expect(screen.getByText('UA')).toBeInTheDocument();
  });

  it('applies the correct size classes', () => {
    const { container } = render(<Avatar size="lg" />);
    expect(container.firstChild).toHaveClass('w-16 h-16');
  });

  it('renders the status indicator when status is provided', () => {
    render(<Avatar status="online" />);
    expect(
      screen.getByText('', { selector: 'span.bg-success' })
    ).toBeInTheDocument();
  });

  it('renders the notification badge when notification is provided', () => {
    render(<Avatar notification={3} />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
