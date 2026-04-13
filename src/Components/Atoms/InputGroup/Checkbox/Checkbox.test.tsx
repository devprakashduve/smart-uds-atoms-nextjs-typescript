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
    render(<Checkbox {...baseProps} />); // checked is undefined, defaults to false
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
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

  it('sets indeterminate state correctly', () => {
    render(<Checkbox checked={false} {...baseProps} indeterminate={true} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.indeterminate).toBe(true);
    // Verify indeterminate visual box is rendered
    // The visual box is a div with specific classes inside the span
    // We can't query by role easily, maybe by class or just ensuring the Icon is NOT there
    // Or we can add a test id to the indeterminate box if needed, or query by className convention
    // But let's check that the Icon is not rendered
    // Check that the Icon is not rendered
    screen.queryByRole('img', { hidden: true });
    // Actually Icon component likely renders an SVG. If name="check", it might not have accessible role "img" by default unless configured.
    // In "displays checkmark when checked", it queries by testId 'checkmark-icon'.
    // 'checkmark-icon' is the wrapper div.
    // The Icon is inside.
    // Let's rely on input indeterminate property mainly, and maybe check class on the checkbox input if 'indeterminate:bg-atom-input' is present?
    expect(checkbox).toHaveClass('indeterminate:bg-atom-input');
  });

  it('handles click without onChange prop provided', () => {
    render(<Checkbox checked={false} label="No Handler" name="no-handler" />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
