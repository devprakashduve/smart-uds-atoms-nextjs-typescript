import { AccordionItemProps } from '../AccordionItem/AccordionItemProps.interface';

export interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
  isOpen?: boolean;
  disabled?: boolean;
  variant?: 'default' | 'filled';
  icon?: React.ReactNode | ((isExpanded: boolean) => React.ReactNode) | null;
  onToggle?: (isExpanded: boolean) => void;
  isRounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
