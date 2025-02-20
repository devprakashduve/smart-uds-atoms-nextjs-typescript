import React, { useEffect, useState } from 'react';
import { ToastNotificationProps } from './ToastNotificationProps.interface';
import Button from '@/Components/Atoms/Button';
import Icon from '@/Components/Atoms/Icon';

const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  type,
  duration = 3000,
  onClose,
  isVisible = true,
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

  return (
    <>
      {visible && (
        <div
          className={`absolute right-4 top-4 mb-4 flex w-full max-w-xs items-center justify-between rounded-lg p-4 font-medium text-white shadow-md transition-opacity duration-500 ease-in-out ${type === 'success' && 'bg-success'} ${type === 'warning' && 'bg-warning'} ${type === 'info' && 'bg-info'} ${type === 'error' && 'bg-error'}`}
          role="alert"
        >
          <div className="toast-message">{message}</div>
          <Button
            variant="icon"
            onClick={onClose}
            icon={<Icon name={'close'} variant={'outline'} />}
            className="px-0"
          />
        </div>
      )}
    </>
  );
};

export default ToastNotification;
