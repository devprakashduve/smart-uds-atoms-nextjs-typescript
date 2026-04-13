import { render, screen, fireEvent } from '@testing-library/react';
import InfoBanner from '.';

describe('InfoBanner', () => {
  const mockOnDismiss = jest.fn();
  const defaultProps = {
    title: 'Welcome Banner',
    subtitle: 'This is a subtitle',
    imageUrl: '/images/test.jpg',
    linkUrl: '/register',
    altText: 'Test Image',
    onDismiss: mockOnDismiss,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with all props', () => {
    render(<InfoBanner {...defaultProps} />);
    expect(screen.getByText('Welcome Banner')).toBeInTheDocument();
    expect(screen.getByText('This is a subtitle')).toBeInTheDocument();
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Register now/i })).toHaveAttribute(
      'href',
      '/register'
    );
  });

  test('renders without optional props', () => {
    render(<InfoBanner title="Minimal Banner" linkUrl="#" altText="" />);
    expect(screen.getByText('Minimal Banner')).toBeInTheDocument();
    expect(screen.queryByText('This is a subtitle')).not.toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('dismisses the banner when close button is clicked', () => {
    const { container } = render(<InfoBanner {...defaultProps} />);
    const dismissBtn = screen.getByLabelText('Dismiss banner');

    expect(screen.getByText('Welcome Banner')).toBeInTheDocument();

    fireEvent.click(dismissBtn);

    expect(mockOnDismiss).toHaveBeenCalled();
    expect(container).toBeEmptyDOMElement();
  });

  test('handles dismiss without onDismiss prop', () => {
    const { container } = render(
      <InfoBanner title="No Callback" linkUrl="#" altText="" />
    );
    const dismissBtn = screen.getByLabelText('Dismiss banner');

    fireEvent.click(dismissBtn);

    expect(container).toBeEmptyDOMElement();
    // No error thrown
  });
});
