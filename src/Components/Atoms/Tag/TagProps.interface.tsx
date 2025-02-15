export type TagColor =
  | 'primary-light'
  | 'primary'
  | 'primary-dark'
  | 'secondary-light'
  | 'secondary'
  | 'secondary-dark'
  | 'accent-light'
  | 'accent'
  | 'accent-dark'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'neutral'
  | 'line-light'
  | 'line'
  | 'line-dark'
  | 'letter-light'
  | 'letter'
  | 'letter-dark'
  | 'btn-light'
  | 'btn'
  | 'btn-dark';
export interface TagProps {
  label: string;
  color?: TagColor;
  onClick?: () => void;
  removable?: boolean;
  onRemove?: () => void;
  icon?: React.ReactNode;
}
