import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '.';

describe('Input Component', () => {
  it('renders the label when provided', () => {
    render(
      <Input
        name="email"
        label="Email Address"
        type="email"
        value=""
        onChange={() => {}}
      />
    );
    expect(screen.getByText(/Email Address/i)).toBeInTheDocument();
  });

  it('updates value and calls onChange callback', () => {
    const handleChange = jest.fn();
    render(
      <Input
        name="email"
        label="Email Address"
        type="email"
        value=""
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test@example.com' } });
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'test@example.com' }),
      })
    );
  });

  it('displays error for invalid email', () => {
    render(
      <Input
        name="email"
        label="Email Address"
        type="email"
        value="invalid-email"
        onChange={() => {}}
        isRequired={true}
        validationErrorMessage="Invalid email address."
      />
    );
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'invalid-email' } });
    fireEvent.blur(inputElement);
    fireEvent.change(inputElement, { target: { value: '' } }); // Trigger validation
    fireEvent.change(inputElement, { target: { value: 'invalid-email' } });
    fireEvent.blur(inputElement);
    expect(screen.queryByText(/Invalid email address/i)).toBeInTheDocument();
  });

  it('toggles password visibility when icon is clicked', () => {
    render(
      <Input
        name="password"
        label="Password"
        type="password"
        value="password123"
        onChange={() => {}}
        showIcon={true}
        autoComplete="new-password"
      />
    );
    const inputElement = screen.getByTitle('password') as HTMLInputElement;
    const iconContainer = document.querySelector(
      'span.absolute.inset-y-0.right-0.flex'
    );
    expect(iconContainer).toBeInTheDocument();
    expect(inputElement.type).toBe('password');

    if (iconContainer) {
      fireEvent.click(iconContainer);
    }
    expect(inputElement.type).toBe('text');

    if (iconContainer) {
      fireEvent.click(iconContainer);
    }
    expect(inputElement.type).toBe('password');
  });

  it('renders as disabled when the disabled prop is true', () => {
    render(
      <Input
        name="test"
        label="Test Input"
        type="text"
        value="test"
        onChange={() => {}}
        disabled={true}
      />
    );
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeDisabled();
  });

  it('validates input against custom pattern', () => {
    render(
      <Input
        name="custom"
        label="Custom Pattern"
        type="text"
        value=""
        onChange={() => {}}
        pattern="^[A-Za-z]+$"
        validationErrorMessage="Only letters are allowed."
      />
    );
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: '123' } });
    expect(screen.getByText(/Only letters are allowed/i)).toBeInTheDocument();
  });
});
