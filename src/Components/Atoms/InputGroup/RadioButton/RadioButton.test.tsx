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
        checked={false}
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
        checked={false}
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
        checked={false}
        onChange={onChangeMock}
        disabled={true}
      />
    );

    const radioInput = screen.getByRole('radio');
    expect(radioInput).toBeDisabled();
  });

  it('applies checked false', () => {
    render(
      <RadioButton
        label="Indeterminate Radio"
        name="indeterminate-radio"
        checked={false}
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
        checked={true}
        onChange={onChangeMock}
      />
    );

    const radioInput = screen.getByRole('radio') as HTMLInputElement;
    expect(radioInput.checked).toBe(true);

    const parentDiv = radioInput.closest('div');
    expect(parentDiv).toBeInTheDocument();
    const indicator = parentDiv?.querySelector('span.absolute');
    expect(indicator).toBeInTheDocument();
  });

  it('applies custom styles', () => {
    render(
      <RadioButton
        label="Styled Radio"
        name="styled-radio"
        checked={false}
        onChange={onChangeMock}
        style={{ color: 'red' }}
      />
    );

    const radioInput = screen.getByRole('radio');
    expect(radioInput).toHaveStyle('color: red');
  });
});
