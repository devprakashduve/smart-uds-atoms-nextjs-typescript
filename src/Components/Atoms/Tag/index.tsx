import React from 'react';
import { TagProps } from './TagProps.interface';
import Button from '../Button';

const Tag: React.FC<TagProps> = ({ label, onClick, onRemove, icon }) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <div
      className={`inline-flex items-center rounded-full bg-atom-tag-background px-4 py-1 text-sm font-medium transition-colors ${onClick ? 'cursor-pointer hover:opacity-80' : ''}`}
      onClick={onClick}
      onKeyDown={(e) => onClick && e.key === 'Enter' && onClick()}
    >
      {label}
      {icon && (
        <Button
          variant="icon"
          className={`pr-0 text-atom-tag-text`}
          onClick={() => handleRemove}
        >
          {icon}
        </Button>
      )}
    </div>
  );
};

export default Tag;
