import { render, screen, fireEvent } from '@testing-library/react';
import Avatar from '@/Components/Atoms/Avatar';
import { classNames } from '@/Components/Utilities/componentsMethods';
import { AvatarProps } from './AvatarProps.interface';

// Mock dependencies
jest.mock('@/Components/Utilities/componentsMethods', () => ({
  classNames: jest.fn((...args) => args.join(' ')),
}));

jest.mock('../Img', () => ({
  __esModule: true,
  default: (props: AvatarProps) => <img {...props} />,
}));

const testProps = {
  alt: 'Test Avatar',
  src: '/test-avatar.jpg',
  size: 16,
  width: 105,
  height: 105,
};

describe('Avatar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders image when src is provided', () => {
    render(<Avatar {...testProps} />);
    const img = screen.getByRole('img', { name: testProps.alt });
    expect(img).toHaveAttribute('src', testProps.src);
    expect(img).toHaveClass('w-full h-full object-cover');
  });

  it('shows initials when src is missing', () => {
    render(<Avatar {...testProps} src={undefined} initials="TS" />);
    const fallback = screen.getByText('TS');
    expect(fallback).toBeInTheDocument();
    expect(fallback).toHaveClass('bg-atom-avatar-background');
  });

  it('displays status indicator with correct styling', () => {
    const { rerender } = render(<Avatar {...testProps} status="online" />);

    // Test online status
    let status = screen.getByTestId('avatar-status');
    expect(status).toHaveClass('bg-success');

    // Test different status
    rerender(<Avatar {...testProps} status="busy" circle />);
    status = screen.getByTestId('avatar-status');
    expect(status).toHaveClass('bg-error right-2 top-2');
  });

  it('handles image errors by showing initials', () => {
    render(<Avatar {...testProps} initials="AB" />);
    fireEvent.error(screen.getByRole('img'));
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('applies correct container classes', () => {
    render(<Avatar {...testProps} className="custom-class" circle size={24} />);

    expect(classNames).toHaveBeenCalledWith(
      'w-24 h-24 relative',
      'overflow-hidden rounded-full custom-class'
    );
  });

  it('shows rounded style when rounded prop is true', () => {
    render(<Avatar {...testProps} rounded />);
    expect(classNames).toHaveBeenCalledWith(
      expect.stringContaining('w-16 h-16'),
      'overflow-hidden rounded'
    );
  });

  it('prioritizes circle prop over rounded', () => {
    render(<Avatar {...testProps} circle />);
    expect(classNames).toHaveBeenCalledWith(
      expect.anything(),
      expect.stringContaining('rounded-full')
    );
  });

  it('handles accessibility attributes', () => {
    render(<Avatar {...testProps} src={undefined} />);
    const fallback = screen.getByRole('img', { name: testProps.alt });
    expect(fallback).toBeInTheDocument();
  });

  it('does not show status when status prop is undefined', () => {
    const { queryByTestId } = render(<Avatar {...testProps} />);
    expect(queryByTestId('avatar-status')).not.toBeInTheDocument();
  });

  it('handles missing initials gracefully', () => {
    render(<Avatar {...testProps} src={undefined} />);
    const fallback = screen.getByRole('img', { name: testProps.alt });
    expect(fallback).toBeEmptyDOMElement();
  });
});
