import { render, screen } from '@testing-library/react';
import UDSImage from '@/Components/Atoms/Image';
import { ImageProps } from './ImageProps.interface';

// Mock the Next.js Image component
jest.mock('./index', () => ({
  __esModule: true,
  default: (props: ImageProps) => <UDSImage {...props} />,
}));

// Mock the classNames utility
jest.mock('../../Utilities/componentsMethods', () => ({
  classNames: jest.fn((...classes) => classes.join(' ')),
}));

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
