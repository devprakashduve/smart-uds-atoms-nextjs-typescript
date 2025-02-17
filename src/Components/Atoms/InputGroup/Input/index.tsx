import React, { useState, useEffect, useCallback } from 'react';
import { InputProps, InputSize } from './InputProps.interface';
import './Input.css';
import { classNames } from '@/Components/Utilities/componentsMethods';
import Label from '../../Label';
import Icon from '../../Icon';

const Input: React.FC<InputProps> = ({
  value: initialValue,
  onChange,
  placeholder = '',
  disabled = false,
  type,
  label,
  id,
  name,
  className,
  size = InputSize.MD,
  isRequired,
  isBorder,
  showIcon = false,
  customIconSVG,
  customIconName,
}) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [iconName, setIconName] = useState('');
  const [inputType, setInputType] = useState(type);

  // Determine size classes (this might be more elaborate in your actual implementation)
  const sizeClasses = {
    [InputSize.SM]: 'py-1 px-2',
    [InputSize.MD]: 'py-2 px-3',
    [InputSize.LG]: 'py-3 px-4',
  }[size];

  // Set default icon based on input type (using string comparisons)
  useEffect(() => {
    let defaultIcon = '';
    switch (type) {
      case 'password':
        defaultIcon = customIconName || 'openEye';
        break;
      case 'email':
        defaultIcon = customIconName || 'envelop';
        break;
      case 'tel':
        defaultIcon = customIconName || 'phone';
        break;
      default:
        defaultIcon = customIconName || '';
        break;
    }
    setIconName(defaultIcon);
  }, [type, customIconName]);

  // Validate input value (this logic remains unchanged)
  const validateInput = useCallback(
    (value: string) => {
      if (isRequired && !value) return 'This field is required.';
      switch (type) {
        case 'email': {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) return 'Invalid email address.';
          break;
        }
        case 'number':
          if (isNaN(Number(value))) return 'Must be a number.';
          break;
        case 'tel': {
          const telRegex = /^\+?[1-9]\d{1,14}$/;
          if (!telRegex.test(value)) return 'Invalid phone number.';
          break;
        }
        case 'password': {
          const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          if (!passwordRegex.test(value))
            return 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
          break;
        }
        default:
          break;
      }
      return '';
    },
    [type, isRequired]
  );

  // Handle input changes and validations
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      const errorMessage = validateInput(newValue);
      setError(errorMessage);
      onChange?.(newValue);
    },
    [onChange, validateInput]
  );

  // Merge classes for the input element
  const inputClass = classNames(
    `w-full bg-atom-input-background ${isBorder !== false ? !disabled && 'border hover:border-atom-input/40 focus:border-atom-input/50' : ''} placeholder-atom-input-text/40 text-atom-input-text   rounded-input transition duration-300 ease focus:outline-none`,
    className,
    sizeClasses,
    error && 'border-error',
    isBorder && 'border-atom-input '
  );

  return (
    <div className="relative w-full">
      {label && (
        <Label className="mb-2 block text-atom-input-text" htmlFor={name}>
          {label}
          {isRequired && <span className="ml-1 text-error">*</span>}
        </Label>
      )}
      <div className="relative">
        <input
          title={name}
          type={inputType}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          required={isRequired}
          className={`${inputClass} ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
        />
        {showIcon && (
          <span
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
            onClick={() => {
              if (type === 'password') {
                // Toggle password visibility
                setIconName(iconName === 'openEye' ? 'closeEye' : 'openEye');
                setInputType(inputType === 'password' ? 'text' : 'password');
              }
            }}
          >
            {customIconSVG ? (
              <Icon name={''} variant="outline">
                {customIconSVG}
              </Icon>
            ) : (
              <Icon name={iconName} variant="outline" />
            )}
          </span>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-error">{error}</p>}
    </div>
  );
};

export default Input;
