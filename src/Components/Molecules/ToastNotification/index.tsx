import React, { useEffect } from 'react';
import { ToastNotificationProps } from './ToastNotificationProps.interface';
import './ToastNotification.css';

const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  type,
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`toast-notification ${type}`} role="alert">
      <div className="toast-message">{message}</div>
      <button className="toast-close-button" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default ToastNotification;
