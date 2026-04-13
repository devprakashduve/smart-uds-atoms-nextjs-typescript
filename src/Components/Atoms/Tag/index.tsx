import React from 'react';
import { TagProps } from './TagProps.interface';

const Tag: React.FC<TagProps> = ({
  label,
  onClick,
  onRemove,
  icon,
  className,
}) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <div
      role="listitem"
      className={`inline-flex items-center rounded-full bg-atom-tag-background px-4 py-1 text-sm font-medium transition-colors ${onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className ?? ''}`}
      onClick={onClick}
      onKeyDown={(e) => onClick && e.key === 'Enter' && onClick()}
      tabIndex={onClick ? 0 : undefined}
    >
      <span>{label}</span>
      {(icon || onRemove) && (
        <button
          type="button"
          aria-label={`Remove ${label}`}
          onClick={handleRemove}
          onKeyDown={(e) =>
            e.key === 'Enter' && handleRemove(e as unknown as React.MouseEvent)
          }
          className="ml-1.5 inline-flex items-center rounded-full p-0.5 text-atom-tag-text hover:bg-atom-tag-text/20 focus:outline-none focus:ring-1 focus:ring-atom-tag-text"
        >
          {icon ?? (
            <svg
              className="h-3 w-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default Tag;
