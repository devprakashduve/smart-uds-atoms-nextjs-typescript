import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './index';
import { InputType } from './InputProps.interface'; // Adjust the import as needed

describe('Input Component', () => {
  it('renders the label when provided', () => {
    render(
      <Input
        name="email"
        label="Email Address"
        type={InputType.EMAIL}
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
        type={InputType.EMAIL}
        value=""
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByRole('textbox'); // For email, input type usually becomes "textbox"
    fireEvent.change(inputElement, { target: { value: 'test@example.com' } });
    expect(handleChange).toHaveBeenCalledWith('test@example.com');
  });

  it('displays error for invalid email', () => {
    const handleChange = jest.fn();
    render(
      <Input
        name="email"
        label="Email Address"
        type={InputType.EMAIL}
        value=""
        onChange={handleChange}
        isRequired={true}
      />
    );
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'invalid-email' } });
    // Assuming your component shows error text "Invalid email address." for an invalid email.
    expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
  });

  it('toggles password visibility when icon is clicked', () => {
    const handleChange = jest.fn();
    render(
      <Input
        name="password"
        label="Password"
        type={InputType.PASSWORD}
        value="password123"
        onChange={handleChange}
        showIcon={true}
      />
    );
    const inputElement = screen.getByTitle('password') as HTMLInputElement;
    // Query the icon container; assuming it has a unique className from your implementation.
    const iconContainer = document.querySelector(
      'span.absolute.inset-y-0.right-0.flex'
    );
    expect(iconContainer).toBeInTheDocument();

    // Initially, input type should be "password"
    expect(inputElement.type).toBe('password');

    // Simulate clicking the icon to toggle visibility
    if (iconContainer) {
      fireEvent.click(iconContainer);
    }
    // After click, input type should become "text"
    expect(inputElement.type).toBe('text');

    // Click again to toggle back
    if (iconContainer) {
      fireEvent.click(iconContainer);
    }
    expect(inputElement.type).toBe('password');
  });

  it('renders as disabled when the disabled prop is true', () => {
    const handleChange = jest.fn();
    render(
      <Input
        name="test"
        label="Test Input"
        type={InputType.TEXT}
        value="test"
        onChange={handleChange}
        disabled={true}
      />
    );
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeDisabled();
  });
});
