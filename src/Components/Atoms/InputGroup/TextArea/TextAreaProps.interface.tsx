import React from 'react';

export interface TextAreaProps {
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  showCharCount?: boolean;
  rows?: number;
  cols?: number;
  autoFocus?: boolean;
  readOnly?: boolean;
  className?: string;
  id?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  charCountWarningThreshold?: number;
  label?: string;
  isRequired?: boolean;
  requiredErrorMessage?: string;
  validationErrorMessage?: string;
  pattern?: string;
  validationOnFocus?: boolean;
}
