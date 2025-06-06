import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from '.';

describe('Checkbox Component', () => {
  const mockOnChange = jest.fn(); // Renamed from mockToggle
  const baseProps = {
    name: 'test-checkbox',
    label: 'Test Checkbox',
    onChange: mockOnChange, // Renamed from toggleChecked
  };

  beforeEach(() => {
    mockOnChange.mockClear(); // Renamed from mockToggle
  });

  it('renders with default props', () => {
    render(<Checkbox checked={false} {...baseProps} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(baseProps.label)).toBeInTheDocument();
  });

  it('toggles checked state when clicked', () => {
    render(<Checkbox checked={false} {...baseProps} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(mockOnChange).toHaveBeenCalledWith(true); // Renamed from mockToggle
  });

  it('displays checkmark when checked', () => {
    render(<Checkbox {...baseProps} checked={true} />);
    const svg = screen.getByTestId('checkmark-icon');
    expect(svg).toBeVisible();
  });

  it('handles disabled state', () => {
    render(<Checkbox checked={false} {...baseProps} disabled={true} />);
    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText(baseProps.label);

    expect(checkbox).toBeDisabled();
    expect(label).toHaveClass('cursor-not-allowed');
  });

  it('updates when checked prop changes', () => {
    const { rerender } = render(<Checkbox {...baseProps} checked={false} />);
    const checkbox = screen.getByRole('checkbox');

    rerender(<Checkbox {...baseProps} checked={true} />);
    expect(checkbox).toBeChecked();
  });

  it('renders different sizes correctly', () => {
    const { rerender } = render(
      <Checkbox checked={false} {...baseProps} size="sm" />
    );
    expect(screen.getByRole('checkbox')).toHaveClass('h-4 w-4');
    expect(screen.getByText(baseProps.label)).toHaveClass('text-sm');

    rerender(<Checkbox checked={false} {...baseProps} size="lg" />);
    expect(screen.getByRole('checkbox')).toHaveClass('h-8 w-8');
    expect(screen.getByText(baseProps.label)).toHaveClass('text-lg');
  });

  it('associates label correctly with input', () => {
    render(<Checkbox checked={false} {...baseProps} />);
    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText(baseProps.label);
    expect(checkbox).toHaveAttribute(
      'aria-labelledby',
      `${baseProps.name}-checkbox-label`
    );
    expect(label).toHaveAttribute('id', `${baseProps.name}-checkbox-label`);
  });

  it('prevents click propagation when disabled', () => {
    render(<Checkbox checked={false} {...baseProps} disabled={true} />);
    const label = screen.getByText(baseProps.label);
    fireEvent.click(label);
    expect(mockOnChange).not.toHaveBeenCalled(); // Renamed from mockToggle
  });
});
