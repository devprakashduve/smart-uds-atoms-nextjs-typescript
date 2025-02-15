export type ButtonVariant =
  | 'default'
  | 'outline'
  | 'pill'
  | 'pill-outline'
  | 'bordered'
  | 'three-d'
  | 'elevated'
  | 'link'
  | 'icon'
  | 'groups'
  | 'disabled';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
  rounded?: ButtonRounded;
  size?: ButtonSize;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
  className?: string;
  underlineHover?: boolean;
}
