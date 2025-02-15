import React from 'react';

export enum InputSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
  NUMBER = 'number',
  EMAIL = 'email',
  TEL = 'tel',
}

export interface InputProps {
  value: string;
  name: string;
  onChange?: (value?: string) => void;
  onKeyPress?: (value?: string) => void;
  placeholder?: string;
  disabled?: boolean;
  type: InputType;
  label?: string;
  id?: string;
  className?: string;
  size?: InputSize;
  isRequired?: boolean;
  rounded?: boolean;
  roundedFull?: boolean;
  showIcon?: boolean;
  customIconSVG?: React.ReactNode;
  customIconName?: string;
}
