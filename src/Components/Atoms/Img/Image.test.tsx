import { render, screen } from '@testing-library/react';
import Img from '@/Components/Atoms/Img';
import { classNames } from '@/Components/Utilities/componentsMethods';
import { ImageProps } from './ImageProps.interface';

// Mock the Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: ImageProps) => <img {...props} />,
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
    render(<Img {...testProps} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    render(<Img src={testProps.src} alt={testProps.alt} />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('width', '300');
    expect(img).toHaveAttribute('height', '300');
    expect(img).toHaveClass('object-cover');
  });

  it('merges custom classNames with default', () => {
    const customClass = 'custom-class';
    render(<Img {...testProps} className={customClass} />);

    expect(classNames).toHaveBeenCalledWith('object-cover', customClass);
    expect(screen.getByRole('img')).toHaveClass('object-cover custom-class');
  });

  it('handles custom dimensions correctly', () => {
    const customProps = {
      ...testProps,
      width: 500,
      height: 500,
    };

    render(<Img {...customProps} />);
    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('width', '500');
    expect(img).toHaveAttribute('height', '500');
  });

  it('passes through all required props', () => {
    render(<Img {...testProps} />);
    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', testProps.src);
    expect(img).toHaveAttribute('alt', testProps.alt);
  });

  it('renders without className prop', () => {
    render(<Img {...testProps} />);
    expect(classNames).toHaveBeenCalledWith('object-cover', undefined);
    expect(screen.getByRole('img')).toHaveClass('object-cover');
  });
});
