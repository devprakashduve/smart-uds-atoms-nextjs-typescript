import { render, screen } from '@testing-library/react';
import Avatar from '.';

const testProps = {
  alt: 'Test Avatar',
  src: '/images/avatar.jpg',
  size: 16,
};

describe('Avatar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders image when src is provided', () => {
    render(<Avatar {...testProps} />);
    const img = screen.getByRole('img', { name: testProps.alt });
    expect(img).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimages%2Favatar.jpg&w=256&q=75'
    );
    expect(img).toHaveClass('w-full h-full object-cover');
  });
});
