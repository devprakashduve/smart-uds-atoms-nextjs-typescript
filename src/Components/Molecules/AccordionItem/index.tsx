import { useState } from 'react';
import { AccordionItemProps } from './AccordionItemProps.interface';
import Icon from '@/Components/Atoms/Icon';

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen = false,
  disabled = false,
  variant = 'default',
  icon = <Icon name={'chevronDown'} variant={'outline'} />,
  onToggle,
  isRounded = false,
  size = 'md',
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const toggleAccordion = () => {
    if (disabled) return;
    const newState = !isExpanded;
    setIsExpanded(newState);
    onToggle?.(newState);
  };

  const headerBaseClasses = `flex items-center justify-between ${isRounded ? 'rounded-input' : ''} px-4 ${size === 'sm' && 'py-2'} ${size === 'md' && 'py-4'} ${size === 'lg' && 'py-5'} transition-colors duration-200`;
  const variantClasses = {
    default:
      'bg-atom-accordion-background border border-line hover:border-atom-accordion-background text-atom-accordion-text/50',
    filled: 'bg-none border-b text-atom-accordion-text hover:border-b-2',
  };
  const disabledClasses =
    'bg-atom-accordion-background/40 text-atom-accordion-text/50 cursor-not-allowed';

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
        <h3 className="font-semibold">{title}</h3>
        <span
          className={`text-xl transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        >
          {typeof icon === 'function' ? icon(isExpanded) : icon || ''}
        </span>
      </div>
      {content && (
        <div
          className={`overflow-hidden transition-all duration-200 ease-in-out ${
            isExpanded ? 'max-h-[1000px]' : 'max-h-0'
          }`}
        >
          <div
            className={`mt-1 border-none p-4 ${isRounded ? 'rounded-input' : ''} ${
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
