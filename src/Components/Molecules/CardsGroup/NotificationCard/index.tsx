import React from 'react';

interface NotificationCardProps {
  icon: React.ReactNode;
  title: string;
  message: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  icon,
  title,
  message,
}) => {
  return (
    <div className="flex max-w-sm items-center space-x-4 rounded-lg bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
