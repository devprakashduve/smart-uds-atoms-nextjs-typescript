import React from 'react';
import { CheckboxProps } from './CheckboxProps.interface';

const Checkbox = ({
  checked,
  label,
  toggleChecked,
  size = 'md',
  title,
  name,
  disabled = false,
  indeterminate = false,
  rounded = false,
}: CheckboxProps) => {
  const boxSize = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  }[size];

  const textSize = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }[size];

  const inputRef = React.useRef<HTMLInputElement>(null);
  const setTitle = title || name;
  const inputId = `${name}-checkbox`;
  const [isChecked, setIsChecked] = React.useState(checked);
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div
      className={`inline-flex items-center ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
    >
      <label className="relative flex cursor-pointer items-center">
        <input
          ref={inputRef}
          id={inputId}
          title={setTitle}
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
            toggleChecked(!isChecked);
          }}
          disabled={disabled}
          className={`peer appearance-none ${rounded ? 'rounded' : ''} border border-line-light shadow transition-all checked:bg-line-dark hover:border-line hover:shadow-md focus:outline-none ${boxSize} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${indeterminate ? 'indeterminate:bg-line-medium' : ''}`}
          aria-labelledby={`${inputId}-label`}
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-letter-light opacity-0 peer-checked:opacity-100 peer-indeterminate:opacity-100">
          {indeterminate ? (
            <div className={`${boxSize} bg-line-medium rounded-sm`} />
          ) : (
            <svg
              className={`${boxSize} text-letter-light`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 11.917 9.724 16.5 19 7.5"
              />
            </svg>
          )}
        </span>
      </label>
      <label
        id={`${inputId}-label`}
        htmlFor={inputId}
        className={`ml-2 font-medium text-letter ${textSize} ${disabled ? 'cursor-not-allowed' : ''}`}
        onClick={(e) => disabled && e.preventDefault()}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
