export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  setBackground?: string;
  isBackground?: boolean;
  isRounded?: boolean;
  /** Tooltip position relative to the trigger. Default: 'top' */
  position?: TooltipPosition;
  /** Id linking trigger to tooltip via aria-describedby */
  id?: string;
  className?: string;
}
