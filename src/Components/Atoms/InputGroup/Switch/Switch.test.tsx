import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Switch from '.';

describe('Switch Component', () => {
  const defaultProps = {
    textForOn: 'On',
    textForOff: 'Off',
    checked: false,
    toggleChecked: jest.fn(),
    size: 'md' as const,
    disabled: false,
    disableIcons: false,
    noBackground: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with initial state and shows textForOff when unchecked', () => {
    render(<Switch {...defaultProps} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    expect(screen.getByText(defaultProps.textForOff)).toBeInTheDocument();
  });

  it('toggles state and updates label text when clicked', () => {
    render(<Switch {...defaultProps} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    // Click to toggle on
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
    expect(screen.getByText(defaultProps.textForOn)).toBeInTheDocument();

    // Click again to toggle off
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
    expect(screen.getByText(defaultProps.textForOff)).toBeInTheDocument();
  });

  it('calls onChange callback with the correct value when toggled', () => {
    const onChangeMock = jest.fn();
    render(<Switch {...defaultProps} onChange={onChangeMock} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

    // Click to toggle on
    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledWith(true);

    // Click again to toggle off
    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledWith(false);
  });

  it('renders as disabled when disabled prop is true', () => {
    render(<Switch {...defaultProps} disabled={true} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox).toBeDisabled();
  });

  it('does not render any icon when disableIcons is true', () => {
    const { container } = render(
      <Switch {...defaultProps} disableIcons={true} />
    );
    const svgElements = container.querySelectorAll('svg');
    expect(svgElements.length).toBe(0);
  });

  it('renders an icon when not disabled and toggles based on state', () => {
    const { container, rerender } = render(
      <Switch {...defaultProps} checked={false} disableIcons={false} />
    );
    // When unchecked, an icon (close icon) should be rendered.
    let svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();

    // Now simulate a state change by rerendering with checked true.
    rerender(<Switch {...defaultProps} checked={true} disableIcons={false} />);
    svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    // Without test IDs, verifying which icon is rendered is challenging.
    // But the presence of an SVG indicates that an icon is rendered.
  });
});
