export interface SpinnerProps {
  color?: string;
  variant: 'css' | 'svg';
  customLoader?: React.ReactNode;
  width: number;
  height: number;
  className?: string;
  colorTheme: string;
}
