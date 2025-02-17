export interface BadgeProps {
  children: React.ReactNode;

  scale?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  className?: string;
  ariaLabel?: string;
}
