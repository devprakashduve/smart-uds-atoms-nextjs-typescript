import { AccordionItemProps } from '../AccordionItem/AccordionItemProps.interface';

export interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
  icon?: React.ReactNode;
}
