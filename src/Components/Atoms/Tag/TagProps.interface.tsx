export interface TagProps {
  label: string;
  onClick?: () => void;
  removable?: boolean;
  onRemove?: () => void;
  icon?: React.ReactNode;
}
