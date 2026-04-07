import React, { useEffect, useState } from 'react';
import { ToastNotificationProps, ToastPosition } from './ToastNotificationProps.interface';
import Button from '@/Components/Atoms/Button';
import Icon from '@/Components/Atoms/Icon';

const positionClasses: Record<ToastPosition, string> = {
  'top-right': 'fixed right-4 top-4',
  'top-left': 'fixed left-4 top-4',
  'bottom-right': 'fixed right-4 bottom-4',
  'bottom-left': 'fixed left-4 bottom-4',
  'top-center': 'fixed left-1/2 top-4 -translate-x-1/2',
  'bottom-center': 'fixed left-1/2 bottom-4 -translate-x-1/2',
};

const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  type,
  duration = 3000,
  onClose,
  isVisible = true,
  position = 'top-right',
  className,
}) => {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`${positionClasses[position]} z-50 mb-4 flex w-full max-w-xs items-center justify-between rounded-lg font-medium text-white shadow-md transition-opacity duration-500 ease-in-out
        ${type === 'success' ? 'bg-success' : ''}
        ${type === 'warning' ? 'bg-warning' : ''}
        ${type === 'info' ? 'bg-info' : ''}
        ${type === 'error' ? 'bg-error' : ''}
        ${className ?? ''}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-message p-4">{message}</div>
      <Button
        variant="icon"
        onClick={() => {
          setVisible(false);
          onClose?.();
        }}
        icon={<Icon name={'close'} variant={'outline'} />}
        className="px-0 text-white"
        ariaLabel="Close notification"
      />
    </div>
  );
};

export default ToastNotification;
