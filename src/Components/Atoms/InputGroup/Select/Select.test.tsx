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

  it('renders without label', () => {
    render(
      <Select
        options={options}
        name="testSelect"
        onChange={() => {}}
      />
    );
    expect(screen.queryByText('Test Select')).not.toBeInTheDocument();
  });

  it('uses id for label htmlFor if provided', () => {
    render(
      <Select
        options={options}
        name="testSelect"
        label="Label ID"
        id="unique-id"
        onChange={() => {}}
      />
    );
    // Label htmlFor should be 'unique-id'
    // We can check by label association
    const label = screen.getByText('Label ID');
    expect(label).toHaveAttribute('for', 'unique-id');
  });

  it('uses label text for htmlFor if id and name are missing', () => {
    render(
      <Select
        options={options}
        // name is optional? Interface? Assuming yes or we pass empty?
        // If name is required by PropType but we pass undefined casting...
        // Let's assume name is optional in implementation usage logic `name || label`.
        label="Label Only"
        onChange={() => {}}
      />
    );
    const label = screen.getByText('Label Only');
    expect(label).toHaveAttribute('for', 'Label Only');
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
    expect(screen.getByText('Select an option')).toBeInTheDocument();
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
    const selectElement = screen.getByRole('combobox');
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

  it('updates internal value when value prop changes', () => {
    const { rerender } = render(
      <Select
        options={options}
        name="testSelect"
        value="option1"
        onChange={() => {}}
      />
    );
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue('option1');

    rerender(
      <Select
        options={options}
        name="testSelect"
        value="option2"
        onChange={() => {}}
      />
    );
    expect(selectElement).toHaveValue('option2');
  });

  it('does not change value if disabled', () => {
    const handleChange = jest.fn();
    render(
      <Select
        options={options}
        name="testSelect"
        disabled={true}
        onChange={handleChange}
      />
    );
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'option2' } });
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('does not change value if no options', () => {
    const handleChange = jest.fn();
    render(
      <Select
        options={[]}
        name="testSelect"
        onChange={handleChange}
      />
    );
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'option2' } });
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('displays error styles when error prop is true and touched', () => {
    render(
      <Select
        options={options}
        name="testSelect"
        error={true}
        onChange={() => {}}
      />
    );
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).not.toHaveClass('border-error');
    fireEvent.change(selectElement, { target: { value: 'option1' } });
    expect(selectElement).toHaveClass('border-error');
  });

  it('displays error styles immediately if value is present', () => {
    render(
      <Select
        options={options}
        name="testSelect"
        value="option1"
        error={true}
        onChange={() => {}}
      />
    );
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveClass('border-error');
  });
});
