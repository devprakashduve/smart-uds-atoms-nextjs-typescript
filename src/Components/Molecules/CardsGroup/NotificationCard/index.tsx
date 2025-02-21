import React from 'react';
import { NotificationCardProps } from './NotificationCard.interface';

const NotificationCard: React.FC<NotificationCardProps> = ({
  icon,
  titleText,
  messageText,
}) => {
  return (
    <div className="from-atom-card-background to-atom-card-to_background text-atom-card-dark rounded-card flex max-w-sm items-center space-x-4 bg-gradient-to-r p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{titleText}</h3>
        <p className="text-sm">{messageText}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
