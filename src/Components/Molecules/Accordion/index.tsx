import React from 'react';
import AccordionItem from '../AccordionItem';
import { AccordionProps } from './AccordionProps.interface';
import './Accordion.css';
const Accordion: React.FC<AccordionProps> = ({ items, icon }) => {
  return (
    <div className="accordion-container w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} icon={icon} />
      ))}
    </div>
  );
};

export default Accordion;
