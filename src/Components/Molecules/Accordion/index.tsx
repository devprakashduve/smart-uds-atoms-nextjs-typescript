import { useState } from 'react';
import AccordionItem from '../AccordionItem';
import { AccordionProps } from './AccordionProps.interface';

const Accordion: React.FC<AccordionProps> = ({
  items,
  icon,
  isRounded,
  size,
  allowMultiple = false,
  onToggle,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    let newOpenIndexes;
    if (allowMultiple) {
      newOpenIndexes = openIndexes.includes(index)
        ? openIndexes.filter((i) => i !== index)
        : [...openIndexes, index];
    } else {
      newOpenIndexes = openIndexes.includes(index) ? [] : [index];
    }
    setOpenIndexes(newOpenIndexes);
    onToggle && onToggle(newOpenIndexes.includes(index));
  };

  return (
    <div className="accordion-container w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          icon={icon ? icon : ''}
          isRounded={isRounded ? true : false}
          size={size ? size : 'md'}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
