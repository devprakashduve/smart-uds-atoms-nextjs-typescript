import { render, screen, fireEvent } from '@testing-library/react';
import InfoBanner from '.';

describe('InfoBanner', () => {
  const defaultProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    imageUrl: '/test-image.jpg',
    linkUrl: '#',
    altText: 'Test Image',
    className: 'test-class',
    onDismiss: jest.fn(),
  };

  it('renders the InfoBanner component', () => {
    render(<InfoBanner {...defaultProps} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
  });

  it('calls onDismiss when dismiss button is clicked', () => {
    render(<InfoBanner {...defaultProps} />);
    fireEvent.click(screen.getByLabelText('Dismiss banner'));
    expect(defaultProps.onDismiss).toHaveBeenCalled();
  });

  it('hides the banner when dismiss button is clicked', () => {
    render(<InfoBanner {...defaultProps} />);
    fireEvent.click(screen.getByLabelText('Dismiss banner'));
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
  });
});
