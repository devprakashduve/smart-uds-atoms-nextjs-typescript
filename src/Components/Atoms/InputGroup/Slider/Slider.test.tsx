import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Slider from './index';

describe('Slider Component', () => {
  const min = 0;
  const max = 100;
  const initialValue = 50;
  const step = 1;

  it('renders with the initial value and displays it', () => {
    const handleChange = jest.fn();
    const handleSetStep = jest.fn();

    render(
      <Slider
        min={min}
        max={max}
        value={initialValue}
        step={step}
        onChange={handleChange}
        setStep={handleSetStep}
      />
    );

    // Query the input element by its title attribute
    const slider = screen.getByTitle('slider') as HTMLInputElement;
    expect(slider).toBeInTheDocument();
    expect(slider.value).toBe(initialValue.toString());

    // Verify that the displayed value matches the initial value
    expect(screen.getByText(initialValue.toString())).toBeInTheDocument();
  });

  it('calls onChange and setStep callbacks on value change', () => {
    const handleChange = jest.fn();
    const handleSetStep = jest.fn();

    render(
      <Slider
        min={min}
        max={max}
        value={initialValue}
        step={step}
        onChange={handleChange}
        setStep={handleSetStep}
      />
    );

    const slider = screen.getByTitle('slider') as HTMLInputElement;
    // Simulate changing the slider value to 75
    fireEvent.change(slider, { target: { value: '75' } });

    expect(slider.value).toBe('75');
    expect(handleChange).toHaveBeenCalledWith(75);
    expect(handleSetStep).toHaveBeenCalledWith(75);
  });

  it('renders as disabled when the disabled prop is true', () => {
    const handleChange = jest.fn();
    const handleSetStep = jest.fn();

    render(
      <Slider
        min={min}
        max={max}
        value={initialValue}
        step={step}
        onChange={handleChange}
        setStep={handleSetStep}
        disabled={true}
      />
    );

    const slider = screen.getByTitle('slider') as HTMLInputElement;
    expect(slider).toBeDisabled();
  });
});
