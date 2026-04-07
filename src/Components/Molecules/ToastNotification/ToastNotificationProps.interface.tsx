export type ToastType = 'success' | 'error' | 'info' | 'warning';
export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center';

export interface ToastNotificationProps {
  message: string; // The message to display
  type: ToastType; // The type of the toast notification (success, error, info, warning)
  duration?: number; // Duration in milliseconds before the toast disappears (default is 3000ms)
  onClose?: () => void; // Callback to close the toast
  isVisible?: boolean;
  /** Position of the toast on screen. Default: 'top-right' */
  position?: ToastPosition;
  className?: string;
}
