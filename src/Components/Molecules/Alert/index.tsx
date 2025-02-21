import React from 'react';
import { AlertProps } from './AlertProps.interface';
import Icon from '@/Components/Atoms/Icon';

const Alert: React.FC<AlertProps> = ({
  type,
  message,
  dismissible = false,
  onClose,
}) => {
  const [visible, setVisible] = React.useState(true);
  const alertTypeClasses = {
    success: 'bg-success/40 text-letter',
    error: 'bg-error/40 text-error',
    warning: 'bg-warning/40 text-error',
    info: 'bg-info text-letter',
  };
  const handleClose = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };
  return (
    <>
      {visible && (
        <div
          className={`alert ${alertTypeClasses[type]} flex items-start rounded-md border-l-4 p-4 shadow-md`}
        >
          <div className="flex-1">
            <p className="text-sm font-medium">{message}</p>
          </div>
          {dismissible && (
            <span onClick={handleClose} className="p-l-1 cursor-pointer">
              <Icon name="close" className="text-letter" variant={'outline'} />
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default Alert;
