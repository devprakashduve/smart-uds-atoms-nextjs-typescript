import React, { useState, useEffect } from 'react';
import { TextAreaProps } from './TextAreaProps.interface';
import './TextArea.css';

const TextArea: React.FC<TextAreaProps> = ({
  value = '',
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
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
}) => {
  const [text, setText] = useState(value);
  const remainingChars = maxLength ? maxLength - text.length : 0;

  useEffect(() => {
    setText(value);
  }, [value]);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    if (maxLength && newValue.length > maxLength) return;

    setText(newValue);
    onChange?.(event);
  };

  return (
    <div className="relative">
      <textarea
        id={id}
        value={text}
        onChange={handleTextChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        rows={rows}
        cols={cols}
        autoFocus={autoFocus}
        readOnly={readOnly}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-describedby={showCharCount ? `${id}-char-count` : undefined}
        className={`textarea-base ${disabled ? 'textarea-disabled' : ''} ${className}`}
      />

      {showCharCount && maxLength !== undefined && (
        <div
          id={`${id}-char-count`}
          className={`char-count ${remainingChars <= 10 ? 'text-warning' : ''} ${remainingChars <= 0 ? 'text-error' : ''}`}
        >
          {text.length}/{maxLength}
        </div>
      )}
    </div>
  );
};

export default TextArea;
