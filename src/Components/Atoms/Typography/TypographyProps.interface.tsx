export interface TypographyProps {
  children: React.ReactNode;
  variant?:
    | 'heading'
    | 'subheading'
    | 'body'
    | 'caption'
    | 'overline'
    | 'button';
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | string;
  weight?: 'light' | 'normal' | 'medium' | 'bold' | 'black';
  color?:
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
    | 'neutral';
  align?: 'left' | 'center' | 'right';
  className?: string;
  as?: keyof JSX.IntrinsicElements; // New property to allow custom HTML tags
}
