import { render, screen, fireEvent } from '@testing-library/react';
import CTACard from './index';

describe('CTACard', () => {
  const mockOnEmailChange = jest.fn();
  const mockOnSubscribe = jest.fn();

  test('renders CTACard component', () => {
    render(
      <CTACard
        email=""
        onEmailChange={mockOnEmailChange}
        onSubscribe={mockOnSubscribe}
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
        onEmailChange={mockOnEmailChange}
        onSubscribe={mockOnSubscribe}
      />
    );
    const input = screen.getByPlaceholderText('Enter email');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(mockOnEmailChange).toHaveBeenCalledWith('test@example.com');
  });

  test('handles subscribe button click', () => {
    render(
      <CTACard
        email=""
        onEmailChange={mockOnEmailChange}
        onSubscribe={mockOnSubscribe}
      />
    );
    const button = screen.getByText('Subscribe');
    fireEvent.click(button);
    expect(mockOnSubscribe).toHaveBeenCalled();
  });
});
