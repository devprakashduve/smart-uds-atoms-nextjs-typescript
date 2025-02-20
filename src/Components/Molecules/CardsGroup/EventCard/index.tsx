import React from 'react';
import UDSImage from '@/Components/Atoms/Image';
import { EventCardProps } from './EventCard.interface';

const EventCard: React.FC<EventCardProps> = ({
  eventTitle,
  eventDescription,
  eventDate,
  eventImageUrl,
}) => {
  return (
    <div className="from-atom-card-background to-atom-card-to_background max-w-sm rounded-lg bg-gradient-to-r shadow-lg">
      <UDSImage
        className="h-40 w-full object-cover"
        src={eventImageUrl}
        alt={eventTitle}
      />
      <div className="p-4">
        <h3 className="text-atom-card-dark text-xl font-bold">{eventTitle}</h3>
        <p className="mt-2 text-sm">{eventDescription}</p>
        <p className="text-line text-atom-card-dark mt-2">📅 {eventDate}</p>
      </div>
    </div>
  );
};

export default EventCard;
