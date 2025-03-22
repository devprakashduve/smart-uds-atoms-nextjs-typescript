import { render, screen } from '@testing-library/react';
import UDSImage from '@/Components/Atoms/UDSImage';

describe('Img Component', () => {
  const testProps = {
    src: '/images/avatar.jpg',
    alt: 'Test image',
    width: 300,
    height: 300,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<UDSImage {...testProps} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
