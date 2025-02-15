export interface Item {
  id: string;
  name: string;
  avatar?: string;
}

export interface SelectMenusProps {
  items: Item[];
  defaultSelected?: Item;
  value?: Item;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  rounded?: boolean;
  roundedFull?: boolean;
  className?: string;
  onChange?: (item: Item) => void;
  placeholder?: string; // New property
}
