import React, { useState, useEffect } from 'react';
import './Select.css';
const sizeClasses = {
    sm: 'py-1.5 pl-2 pr-6 text-sm',
    md: 'py-2 pl-3 pr-8 text-base',
    lg: 'py-3 pl-4 pr-10 text-lg',
};
const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
};
const Select = ({ options, defaultValue = '', value, label, size = 'md', disabled = false, required = false, error = false, className = '', onChange, }) => {
    const [internalValue, setInternalValue] = useState(value || defaultValue);
    const [isTouched, setIsTouched] = useState(false);
    const hasOptions = options.length > 0;
    useEffect(() => {
        if (value !== undefined)
            setInternalValue(value);
    }, [value]);
    const handleChange = (event) => {
        if (disabled || !hasOptions)
            return;
        const newValue = event.target.value;
        setInternalValue(newValue);
        setIsTouched(true);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    const showError = error && (isTouched || !!internalValue);
    const isEmpty = internalValue === '';
    const shouldShowRequiredError = required && isEmpty && isTouched;
    return (<div className={`min-w-[200px] ${className}`}>
      {label && (<label htmlFor="select-input" className={`text-atom-input-text-default mb-1 block font-medium ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'}`}>
          {label}
          {required && <span className="ml-1 text-error">*</span>}
        </label>)}

      <div className="relative">
        <select id="select-input" required={required} disabled={disabled || !hasOptions} value={internalValue} onChange={handleChange} className={`w-full appearance-none rounded-input border transition-all ${sizeClasses[size]} ${disabled || !hasOptions
            ? 'cursor-not-allowed border-atom-input/40 bg-atom-input-background text-atom-input-text/40'
            : error && showError
                ? 'cursor-pointer border-error hover:border-error focus:border-error'
                : 'cursor-pointer border-atom-input/40 hover:border-atom-input focus:border-atom-input focus:shadow-md'}`}>
          {!hasOptions ? (<option value="" disabled>
              No options available
            </option>) : (<>
              {!required && (<option value="" disabled={required}>
                  {defaultValue || 'Select an option'}
                </option>)}
              {options.map((option) => (<option key={option.value} value={option.value} disabled={option.disabled}>
                  {option.label}
                </option>))}
            </>)}
        </select>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`absolute right-3 top-1/2 -translate-y-1/2 ${iconSizes[size]} ${disabled || !hasOptions
            ? 'text-atom-input/40'
            : error
                ? 'text-error'
                : 'text-atom-input'}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15M8.25 9L12 5.25 15.75 9"/>
        </svg>
      </div>

      {shouldShowRequiredError && (<p className="mt-1 text-sm text-error">This field is required</p>)}
    </div>);
};
export default Select;
//# sourceMappingURL=index.jsx.map