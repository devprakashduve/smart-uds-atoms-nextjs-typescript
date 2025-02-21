import { render, screen, fireEvent } from '@testing-library/react';
import CTACard from '.';

describe('CTACard', () => {
  const mockOnEmailChange = jest.fn();
  const mockOnSubscribe = jest.fn();

  test('renders CTACard component', () => {
    render(
      <CTACard
        email=""
        onChange={mockOnEmailChange}
        onSubscribe={mockOnSubscribe}
        title="Join Our Newsletter"
        btnText="Subscribe"
      />
    );
    expect(screen.getByText('Join Our Newsletter')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });

  test('handles input change', () => {
    render(
      <CTACard
        email=""
        onChange={mockOnEmailChange}
        onSubscribe={mockOnSubscribe}
        title="Join Our Newsletter"
        btnText="Subscribe"
      />
    );
    const input = screen.getByPlaceholderText('Enter email');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(mockOnEmailChange).toHaveBeenCalledWith(expect.any(Object));
  });

  test('handles subscribe button click', () => {
    render(
      <CTACard
        email=""
        onChange={mockOnEmailChange}
        onSubscribe={mockOnSubscribe}
        title="Join Our Newsletter"
        btnText="Subscribe"
      />
    );
    const input = screen.getByPlaceholderText('Enter email');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
  });
});
