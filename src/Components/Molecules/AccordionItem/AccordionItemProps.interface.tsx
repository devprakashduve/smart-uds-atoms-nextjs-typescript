export interface AccordionItemProps {
  title: string;
  content: string | React.ReactNode;
  isOpen?: boolean;
  disabled?: boolean;
  variant?: 'default' | 'filled';
  icon?: React.ReactNode | ((isExpanded: boolean) => React.ReactNode) | null;
  onToggle?: (isExpanded: boolean) => void;
  isRounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
