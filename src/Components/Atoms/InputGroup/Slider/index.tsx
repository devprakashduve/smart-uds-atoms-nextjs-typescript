import React, { useState } from 'react';
import { SliderProps } from './SliderProps.interface';
import { classNames } from '@/Components/Utilities/componentsMethods';

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  value: initialValue,
  step = 1,
  onChange,
  setStep,
  disabled = false,
  className = 'h-2',
  border,
  background,
}) => {
  const [value, setValue] = useState(initialValue);
  const thumbColor = '#fff';
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onChange(newValue);
    setStep(newValue);
  };
  // thumbColor = 'bg-atom-input';
  const borderColor =
    'border border-atom-input-/40 hover:border-atom-input focus:border-atom-input';
  const sliderClass = classNames(
    className,
    border ? borderColor : '',
    background ? '' : 'bg-atom-input'
  );

  return (
    <div className="flex w-full flex-col items-center">
      <input
        title="slider"
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={handleChange}
        className={`w-full appearance-none rounded-full ${
          disabled ? 'cursor-not-allowed bg-atom-input-text/30' : ''
        } outline-none ring-atom-input ring-offset-2 ${sliderClass}`}
        disabled={disabled}
        style={{
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none',
        }}
      />
      <style>{`
        input[type='range']::-webkit-slider-thumb {
          background: ${thumbColor} !important;
          width: 20px;
          height: 20px;
          appearance: none;
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid #ccc;
        }
      `}</style>
      <div className="mt-2 text-lg font-medium">{value}</div>
    </div>
  );
};

export default Slider;
