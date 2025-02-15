import React from 'react';
import { TagProps } from './TagProps.interface';
import Button from '../Button';

const colorMap = {
  'primary-light': 'bg-atom-input-light text-atom-input-background',
  primary: 'bg-primary text-atom-input-background',
  'primary-dark': 'bg-atom-input-dark text-atom-input-background',
  'secondary-light': 'bg-secondary-light text-atom-input-background',
  secondary: 'bg-secondary text-atom-input-background',
  'secondary-dark': 'bg-secondary-dark text-atom-input-background',
  'accent-light': 'bg-accent-light text-atom-input-background',
  accent: 'bg-accent text-atom-input-background',
  'accent-dark': 'bg-accent-dark text-atom-input-background',
  error: 'bg-error text-atom-input-background',
  warning: 'bg-warning text-atom-input-background',
  info: 'bg-info text-atom-input-background',
  success: 'bg-success text-atom-input-background',
  neutral: 'bg-neutral text-atom-input-background',
  'line-light': 'bg-atom-input-light text-atom-input-background',
  line: 'bg-atom-input text-atom-input-background',
  'line-dark': 'bg-atom-input-dark text-atom-input-background',
  'letter-light': 'bg-atom-input-text-light text-atom-input-background',
  letter: 'bg-atom-input-text text-atom-input-background',
  'letter-dark': 'bg-atom-input-text-dark text-atom-input-background',
  'btn-light': 'bg-btn-light text-atom-input-background',
  btn: 'bg-btn text-atom-input-background',
  'btn-dark': 'bg-btn-dark text-atom-input-background',
};

const Tag: React.FC<TagProps> = ({
  label,
  color = 'primary',
  onClick,
  removable = false,
  onRemove,
  icon,
}) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <div
      className={`inline-flex items-center rounded-full px-4 py-1 text-sm font-medium transition-colors ${
        colorMap[color]
      } ${onClick ? 'cursor-pointer hover:opacity-80' : ''}`}
      onClick={onClick}
      onKeyDown={(e) => onClick && e.key === 'Enter' && onClick()}
    >
      {label}
      {icon && (
        <Button
          variant="icon"
          className={`text-atom-input-light text-atom-input-background`}
          onClick={() => handleRemove}
        >
          {icon}
        </Button>
      )}
    </div>
  );
};

export default Tag;
