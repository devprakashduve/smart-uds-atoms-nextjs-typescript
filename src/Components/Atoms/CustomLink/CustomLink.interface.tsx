export interface CustomLinkProps {
  href?: string;
  text?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  children?: React.ReactNode;
  underline?: boolean;
  underlineHover?: boolean;
  className?: string;
  onClick?: () => void;
}
