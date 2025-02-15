import React, { useState, useId } from 'react';
import { RadioButtonProps } from './RadioButtonProps.interface';
import './../../../../app/globals.css';
import './RadioButton.css';
import Label from '../../Label';
import { classNames } from '@/Components/Utilities/componentsMethods';

const RadioButton: React.FC<RadioButtonProps> = ({
  initialChecked = false,
  onChange,
  label,
  name,
  size,
  title,
  disabled = false,
  id,
  className,
  labelClassNames = '',
  ...props
}) => {
  const [checked, setChecked] = useState(initialChecked);
  const generatedId = useId();
  const radioId = id || generatedId;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange?.(event.target.checked);
  };
  const radioClass = classNames(className);
  const getSizeClasses = () => {
    switch (size) {
      case 'lg':
        return { input: 'h-8 w-8', indicator: 'h-4 w-4' };
      case 'md':
        return { input: 'h-6 w-6', indicator: 'h-3 w-3' };
      case 'sm':
      default:
        return { input: 'h-4 w-4', indicator: 'h-1/2 w-1/2' };
    }
  };

  const { input: inputSize, indicator: indicatorSize } = getSizeClasses();

  return (
    <div className="inline-flex items-center">
      <div className="relative flex cursor-pointer items-center">
        <input
          {...props}
          id={radioId}
          title={title || name}
          checked={checked}
          name={name}
          onChange={handleChange}
          type="radio"
          disabled={disabled}
          className={`peer ${inputSize} z-auto ${
            disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
          } appearance-none rounded-full border border-line checked:border-line-dark ${radioClass}`}
        />
        <span
          className={`absolute left-1/2 top-1/2 z-[-9] ${indicatorSize} -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-line-dark opacity-0 transition-opacity duration-200 peer-checked:opacity-100 ${
            disabled ? 'bg-opacity-50' : ''
          }`}
        ></span>
      </div>
      {label && (
        <Label
          htmlFor={radioId}
          className={`mx-2 ${labelClassNames} ${disabled ? 'opacity-50' : ''}`}
        >
          {label}
        </Label>
      )}
    </div>
  );
};

export default RadioButton;
