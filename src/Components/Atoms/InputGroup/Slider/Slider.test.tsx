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

    const slider = screen.getByTitle('slider') as HTMLInputElement;
    expect(slider).toBeInTheDocument();
    expect(slider.value).toBe(initialValue.toString());

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

  it('renders with border and different background settings', () => {
    const handleChange = jest.fn();
    const handleSetStep = jest.fn();

    // With border = true
    const { container: c1 } = render(
        <Slider 
            min={0} 
            max={100} 
            value={50} 
            onChange={handleChange} 
            setStep={handleSetStep}
            border={true} 
            step={1}
        />
    );
    expect(c1.querySelector('.border-atom-input-\\/40')).toBeInTheDocument();

    // With background = true
    const { container: c2 } = render(
        <Slider 
            min={0} 
            max={100} 
            value={50} 
            onChange={handleChange} 
            setStep={handleSetStep}
            background={true}
            step={1} 
        />
    );
    const slider2 = c2.querySelector('input');
    expect(slider2).not.toHaveClass('bg-atom-input');
  });

  it('renders with default step when not provided', () => {
    render(<Slider min={0} max={100} value={50} onChange={() => { } } setStep={function (step: number): void {
      throw new Error('Function not implemented.');
    } } />);
    const slider = screen.getByTitle('slider') as HTMLInputElement;
    // Step default is 1
    expect(slider).toHaveAttribute('step', '1');
  });
});
