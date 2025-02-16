import { render, screen } from '@testing-library/react';
import Avatar from '.';
import { AvatarProps } from './AvatarProps.interface';

// Mock dependencies
jest.mock('../../Utilities/componentsMethods', () => ({
  classNames: jest.fn((...args) => args.join(' ')),
}));

jest.mock('./index', () => ({
  __esModule: true,
  default: (props: AvatarProps) => <Avatar {...props} />,
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
});
