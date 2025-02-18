import { useState } from 'react';
import { AccordionItemProps } from './AccordionItemProps.interface';

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen = false,
  disabled = false,
  variant = 'default',
  icon,
  onToggle,
  isRounded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const toggleAccordion = () => {
    if (disabled) return;
    const newState = !isExpanded;
    setIsExpanded(newState);
    onToggle?.(newState);
  };

  const headerBaseClasses = `flex items-center justify-between ${isRounded ? 'rounded-md' : ''} px-4 py-2 transition-colors duration-200`;
  const variantClasses = {
    default:
      'bg-line-dark border border-line hover:border-line-dark text-letter-light',
    filled: 'bg-none border-b text-letter-dark hover:border-b-2',
  };
  const disabledClasses = 'bg-line-light text-letter-light cursor-not-allowed';

  return (
    <div className="mb-4">
      <div
        tabIndex={disabled ? -1 : 0}
        onClick={toggleAccordion}
        onKeyDown={(e) =>
          !disabled && ['Enter', ' '].includes(e.key) && toggleAccordion()
        }
        className={`${headerBaseClasses} ${
          disabled ? disabledClasses : variantClasses[variant]
        }`}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span
          className={`text-xl transition-transform duration-200 ${
            isExpanded ? 'rotate-45' : ''
          }`}
        >
          {typeof icon === 'function' ? icon(isExpanded) : icon || ''}
        </span>
      </div>
      {content && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-[1000px]' : 'max-h-0'
          }`}
        >
          <div
            className={`mt-1 border-none p-4 ${isRounded ? 'rounded-md' : ''} ${
              !disabled && variantClasses[variant]
            }`}
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
