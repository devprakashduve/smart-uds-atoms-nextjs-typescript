import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ColorPicker from './index';

describe('ColorPicker', () => {
  it('renders the color swatch input', () => {
    render(<ColorPicker />);
    // The native color input is type="color"
    const colorInput = document.querySelector('input[type="color"]');
    expect(colorInput).toBeInTheDocument();
  });

  it('renders the hex text input by default', () => {
    render(<ColorPicker />);
    expect(screen.getByLabelText('Hex color code')).toBeInTheDocument();
  });

  it('hides hex input when showHexInput=false', () => {
    render(<ColorPicker showHexInput={false} />);
    expect(screen.queryByLabelText('Hex color code')).not.toBeInTheDocument();
  });

  it('renders a label when label prop is provided', () => {
    render(<ColorPicker label="Brand Color" />);
    expect(screen.getByText('Brand Color')).toBeInTheDocument();
  });

  it('uses the defaultValue for uncontrolled mode', () => {
    render(<ColorPicker defaultValue="#FF0000" />);
    const hexInput = screen.getByLabelText('Hex color code') as HTMLInputElement;
    expect(hexInput.value).toBe('#FF0000');
  });

  it('uses the value prop in controlled mode', () => {
    render(<ColorPicker value="#00FF00" />);
    const hexInput = screen.getByLabelText('Hex color code') as HTMLInputElement;
    expect(hexInput.value).toBe('#00FF00');
  });

  it('calls onChange when hex input changes to a valid color', () => {
    const onChange = jest.fn();
    render(<ColorPicker onChange={onChange} />);
    const hexInput = screen.getByLabelText('Hex color code');
    fireEvent.change(hexInput, { target: { value: '#123456' } });
    expect(onChange).toHaveBeenCalledWith('#123456');
  });

  it('does not call onChange for invalid hex values', () => {
    const onChange = jest.fn();
    render(<ColorPicker onChange={onChange} />);
    const hexInput = screen.getByLabelText('Hex color code');
    fireEvent.change(hexInput, { target: { value: '#GGG' } });
    expect(onChange).not.toHaveBeenCalled();
  });

  it('disables inputs when disabled=true', () => {
    render(<ColorPicker disabled />);
    const hexInput = screen.getByLabelText('Hex color code');
    expect(hexInput).toBeDisabled();
    const colorInput = document.querySelector('input[type="color"]') as HTMLInputElement;
    expect(colorInput).toBeDisabled();
  });

  it('applies custom className to the container', () => {
    const { container } = render(<ColorPicker className="my-picker" />);
    expect(container.firstChild).toHaveClass('my-picker');
  });

  it('shows the aria-label for the color swatch', () => {
    render(<ColorPicker label="Theme Color" />);
    const colorInput = document.querySelector('input[type="color"]') as HTMLInputElement;
    expect(colorInput).toHaveAttribute('aria-label', 'Theme Color');
  });
});
