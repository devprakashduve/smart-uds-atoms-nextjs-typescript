import React from 'react';
import UDSImage from '@/Components/Atoms/Image';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      <UDSImage
        className="h-40 w-full object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <p className="text-line mt-2">📅 {date}</p>
      </div>
    </div>
  );
};

export default EventCard;
