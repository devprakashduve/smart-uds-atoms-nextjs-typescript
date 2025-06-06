import React, { useEffect, useState, useRef } from 'react';
import { CheckboxProps } from './CheckboxProps.interface';
import Icon from '../../Icon';

const sizeMappings = {
  sm: { box: 'h-4 w-4', text: 'text-sm' },
  md: { box: 'h-6 w-6', text: 'text-base' },
  lg: { box: 'h-8 w-8', text: 'text-lg' },
};

const Checkbox = ({
  checked = false,
  label,
  onChange, // Renamed from toggleChecked
  size = 'md',
  title,
  name,
  disabled = false,
  indeterminate = false,
}: CheckboxProps) => {
  const { box: boxSize, text: textSize } = sizeMappings[size];
  const inputRef = useRef<HTMLInputElement>(null);
  const setTitle = title || name;
  const inputId = `${name}-checkbox`;
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked); // Renamed from toggleChecked
  };

  return (
    <div
      data-testid="checkmark-icon"
      className={`inline-flex items-center ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
    >
      <label className="relative flex cursor-pointer items-center">
        <input
          ref={inputRef}
          id={inputId}
          name={name}
          title={setTitle}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className={`peer appearance-none rounded-checkbox border border-atom-input/40 bg-atom-input-background/40 shadow transition-all checked:bg-atom-input-background hover:border-atom-input/40 hover:shadow-md focus:outline-none ${boxSize} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${indeterminate ? 'indeterminate:bg-atom-input' : ''}`}
          aria-labelledby={`${inputId}-label`}
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-atom-input-text/60 opacity-0 peer-checked:opacity-100 peer-indeterminate:opacity-100">
          {indeterminate ? (
            <div
              className={`${boxSize} bg-atom-input-medium rounded-checkbox`}
            />
          ) : (
            <Icon
              name={'check'}
              variant={'outline'}
              className={`${boxSize} text-atom-input/40`}
            />
          )}
        </span>
      </label>
      <label
        id={`${inputId}-label`}
        htmlFor={inputId}
        className={`ml-2 font-medium text-atom-input-text ${textSize} ${disabled ? 'cursor-not-allowed' : ''}`}
        onClick={(e) => disabled && e.preventDefault()}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
