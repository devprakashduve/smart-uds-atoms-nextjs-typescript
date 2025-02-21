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
    <div className="max-w-sm rounded-card bg-gradient-to-r from-atom-card-background to-atom-card-to_background shadow-lg">
      <UDSImage
        className="h-40 w-full object-cover"
        src={eventImageUrl}
        alt={eventTitle}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-atom-card-dark">{eventTitle}</h3>
        <p className="mt-2 text-sm">{eventDescription}</p>
        <p className="text-line mt-2 text-atom-card-dark">📅 {eventDate}</p>
      </div>
    </div>
  );
};

export default EventCard;
