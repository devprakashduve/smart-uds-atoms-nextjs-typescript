import { render, screen, fireEvent } from '@testing-library/react';
import CTACard from '.';

describe('CTACard', () => {
  const mockOnEmailChange = jest.fn((e) => e.target.value);
  const mockOnSubscribe = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders CTACard component with all props', () => {
    render(
      <CTACard
        email=""
        onChange={mockOnEmailChange}
        onSubscribe={mockOnSubscribe}
        title="Join Our Newsletter"
        paraText="Stay updated."
        btnText="Subscribe"
      />
    );
    expect(screen.getByText('Join Our Newsletter')).toBeInTheDocument();
    expect(screen.getByText('Stay updated.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });

  test('handles input change and updates state', () => {
    render(
      <CTACard
        email=""
        // Component Expects onChange to return the value to set state
        onChange={mockOnEmailChange}
        onSubscribe={mockOnSubscribe}
        title="Title"
        btnText="Sub"
      />
    );
    const input = screen.getByPlaceholderText('Enter email');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    
    expect(mockOnEmailChange).toHaveBeenCalled();
    expect(input).toHaveValue('test@example.com');
  });

  test('handles subscribe button click with valid email', () => {
    render(
      <CTACard
        email=""
        onChange={mockOnEmailChange}
        onSubscribe={mockOnSubscribe}
        title="Title"
        btnText="Sub"
      />
    );
    const input = screen.getByPlaceholderText('Enter email');
    const button = screen.getByText('Sub');

    // Type email
    fireEvent.change(input, { target: { value: 'valid@example.com' } });
    
    // Submit
    fireEvent.click(button);
    
    expect(mockOnSubscribe).toHaveBeenCalledWith('valid@example.com');
  });

  test('does not subscribe with empty email', () => {
    render(
      <CTACard
        email=""
        onChange={mockOnEmailChange}
        onSubscribe={mockOnSubscribe}
        title="Title"
        btnText="Sub"
      />
    );
    const button = screen.getByText('Sub');
    
    // Submit without typing
    fireEvent.click(button); // Browser validation might stop it?
    // In JSDOM, form submission might happen but logic checks `userEmail`.
    // userEmail is '' initially.
    
    // Note: Input is required. JSDOM form submission honors required attribute 
    // and might prevent submission event or `preventDefault`?
    // Actually JSDOM doesn't enforce 'required' blocking submission unless using `userEvent` or specific config.
    // If submission fires, `handleSubscribe` runs.
    // `if (userEmail && onSubscribe)` -> userEmail is empty.
    
    // So onSubscribe should NOT be called.
    expect(mockOnSubscribe).not.toHaveBeenCalled();
  });
});
