import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './index';

describe('Select Component', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  it('renders the label when provided', () => {
    render(
      <Select
        options={options}
        name="testSelect"
        label="Test Select"
        onChange={() => {}}
      />
    );
    expect(screen.getByText('Test Select')).toBeInTheDocument();
  });

  it('renders the default option and provided options correctly', () => {
    render(
      <Select
        options={options}
        name="testSelect"
        label="Test Select"
        defaultValue="Select an option"
        onChange={() => {}}
      />
    );
    // Check for the default prompt option
    expect(screen.getByText('Select an option')).toBeInTheDocument();
    // Check for each provided option
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('renders "No options available" when options array is empty', () => {
    render(
      <Select
        options={[]}
        name="emptySelect"
        label="Empty Select"
        onChange={() => {}}
      />
    );
    expect(screen.getByText('No options available')).toBeInTheDocument();
  });

  it('calls onChange when the selection changes', () => {
    const handleChange = jest.fn();
    render(
      <Select
        options={options}
        name="testSelect"
        label="Test Select"
        onChange={handleChange}
      />
    );
    const selectElement = screen.getByRole('combobox'); // Role for select element
    fireEvent.change(selectElement, { target: { value: 'option2' } });
    expect(handleChange).toHaveBeenCalled();
    expect(selectElement).toHaveValue('option2');
  });

  it('renders as disabled when disabled prop is true', () => {
    render(
      <Select
        options={options}
        name="testSelect"
        label="Test Select"
        onChange={() => {}}
        disabled={true}
      />
    );
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeDisabled();
  });

  it('displays required error when field is required, touched, and empty', () => {
    render(
      <Select
        options={options}
        name="testSelect"
        label="Test Select"
        onChange={() => {}}
        required={true}
      />
    );
    const selectElement = screen.getByRole('combobox');
    // Simulate user interaction to mark field as touched
    fireEvent.change(selectElement, { target: { value: '' } });
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('renders the placeholder when provided', () => {
    render(
      <Select
        options={options}
        name="testSelect"
        placeholder="Select an option"
        onChange={() => {}}
      />
    );
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });
});
