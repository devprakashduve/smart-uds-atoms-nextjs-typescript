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
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders image with rounded true (default)', () => {
    render(<Avatar src="/test.jpg" />); // rounded default is true
    const img = screen.getByRole('img');
    expect(img).toHaveClass('rounded-full');
  });

  it('renders with rounded false (square)', () => {
    // With src
    const { container: containerSrc } = render(<Avatar src="/test.jpg" rounded={false} />);
    const img = screen.getByRole('img');
    expect(img).toHaveClass('rounded-lg');
    expect(img).not.toHaveClass('rounded-full');

    // Without src (initials)
    const { container: containerInitials } = render(<Avatar rounded={false} />);
    // The inner div has the class
    const innerDiv = screen.getByText('UA').closest('div');
    expect(innerDiv).toHaveClass('rounded-lg');
  });

  it('renders status with small size', () => {
    render(<Avatar status="online" size="sm" />);
    // Should have h-2 w-2
    // We can find by selector or class check
    const statusParams = document.querySelector('.h-2.w-2.bg-success'); // Class combination
    expect(statusParams).toBeInTheDocument();
  });
});
