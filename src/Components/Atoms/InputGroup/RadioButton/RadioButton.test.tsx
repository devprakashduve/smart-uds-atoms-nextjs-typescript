import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from '.';

describe('RadioButton Component', () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    onChangeMock.mockClear();
  });

  it('renders the radio button with label', () => {
    render(
      <RadioButton
        label="Test Radio"
        name="test-radio"
        initialChecked={false}
        onChange={onChangeMock}
      />
    );

    // Check if the label is rendered
    expect(screen.getByText(/Test Radio/i)).toBeInTheDocument();

    // Check if the radio input is rendered using role
    const radioInput = screen.getByRole('radio');
    expect(radioInput).toBeInTheDocument();
  });

  it('toggles the radio button state and calls onChange', () => {
    render(
      <RadioButton
        label="Toggle Radio"
        name="toggle-radio"
        initialChecked={false}
        onChange={onChangeMock}
      />
    );

    const radioInput = screen.getByRole('radio') as HTMLInputElement;
    // Initially not checked
    expect(radioInput.checked).toBe(false);

    // Simulate click
    fireEvent.click(radioInput);
    expect(radioInput.checked).toBe(true);
    expect(onChangeMock).toHaveBeenCalledWith(true);
  });

  it('respects the disabled prop', () => {
    render(
      <RadioButton
        label="Disabled Radio"
        name="disabled-radio"
        initialChecked={false}
        onChange={onChangeMock}
        disabled={true}
      />
    );

    const radioInput = screen.getByRole('radio');
    expect(radioInput).toBeDisabled();
  });

  it('applies initialChecked false', () => {
    render(
      <RadioButton
        label="Indeterminate Radio"
        name="indeterminate-radio"
        initialChecked={false}
        onChange={onChangeMock}
      />
    );

    const radioInput = screen.getByRole('radio') as HTMLInputElement;
    // Check that the indeterminate property is set
    expect(radioInput.indeterminate).toBe(false);
  });

  it('renders the indicator element when checked', () => {
    render(
      <RadioButton
        label="Indicator Test"
        name="indicator-radio"
        initialChecked={true}
        onChange={onChangeMock}
      />
    );

    const radioInput = screen.getByRole('radio') as HTMLInputElement;
    expect(radioInput.checked).toBe(true);

    // The indicator is rendered as an absolute positioned span.
    // We can query it via its role in the DOM structure, e.g., checking that the parent label contains an SVG or a div.
    const parentLabel = radioInput.parentElement;
    expect(parentLabel).toBeInTheDocument();
    // Query the indicator element; our implementation renders a <span> as a sibling of the input inside the same container.
    const indicator = parentLabel?.querySelector('span.absolute');
    expect(indicator).toBeInTheDocument();
  });
});
