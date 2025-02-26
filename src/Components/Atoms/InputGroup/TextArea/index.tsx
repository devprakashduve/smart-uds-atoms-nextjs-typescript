import React, { useState, useCallback } from 'react';
import { TextAreaProps } from './TextAreaProps.interface';
import Label from '../../Label';

const TextArea: React.FC<TextAreaProps> = ({
  value: initialValue = '',
  onChange,
  placeholder = '',
  disabled = false,
  maxLength,
  showCharCount = false,
  rows = 4,
  cols,
  autoFocus = false,
  readOnly = false,
  className = '',
  label,
  isRequired = false,
  requiredErrorMessage,
  validationErrorMessage,
  pattern,
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  charCountWarningThreshold = 10,
  validationOnFocus = false,
  name = 'text-area',
}) => {
  const [text, setText] = useState(initialValue);
  const [error, setError] = useState('');
  const remainingChars = maxLength ? maxLength - text.length : 0;

  const validateInput = useCallback(
    (value: string) => {
      if (isRequired && !value)
        return requiredErrorMessage || 'This field is required.';
      if (pattern && !new RegExp(pattern).test(value))
        return validationErrorMessage || 'Invalid input.';
      return '';
    },
    [isRequired, pattern, requiredErrorMessage, validationErrorMessage]
  );

  const handleTextChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = event.target.value;
      if (maxLength && newValue.length > maxLength) return;
      const errorMessage = validateInput(newValue);
      setError(errorMessage || '');
      setText(newValue);
      onChange?.(event);
    },
    [onChange, validateInput, maxLength]
  );

  return (
    <div className="relative">
      {label && (
        <Label className="mb-2 block text-atom-input-text" htmlFor={label}>
          {label}
          {isRequired && <span className="ml-1 text-error">*</span>}
        </Label>
      )}
      <textarea
        id={id || label || name}
        value={text}
        onChange={handleTextChange}
        onFocus={validationOnFocus ? handleTextChange : undefined}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        rows={rows}
        required={isRequired}
        name={name}
        cols={cols}
        autoFocus={autoFocus}
        readOnly={readOnly}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-describedby={showCharCount ? `${id}-char-count` : undefined}
        className={`h-36 w-full rounded border border-atom-input/40 bg-atom-input-background px-4 py-2 text-atom-input-text placeholder:text-atom-input-text/30 hover:border-atom-input/80 focus:border-atom-input/80 focus:outline-none ${disabled && 'cursor-not-allowed opacity-50'} ${className}`}
      />

      {showCharCount && maxLength !== undefined && (
        <div
          id={`${id}-char-count`}
          className={`char-count ${remainingChars <= charCountWarningThreshold ? 'text-warning' : ''} ${remainingChars <= 0 ? 'text-error' : ''}`}
        >
          {text.length}/{maxLength}
        </div>
      )}
      {error && <p className="mt-1 text-sm text-error">{error}</p>}
    </div>
  );
};

export default TextArea;
