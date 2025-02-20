import AccordionItem from '../AccordionItem';
import { AccordionProps } from './AccordionProps.interface';

const Accordion: React.FC<AccordionProps> = ({
  items,
  icon,
  isRounded,
  size,
}) => {
  return (
    <div className="accordion-container w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          icon={icon ? icon : ''}
          isRounded={isRounded ? true : false}
          size={size ? size : 'md'}
        />
      ))}
    </div>
  );
};

export default Accordion;
