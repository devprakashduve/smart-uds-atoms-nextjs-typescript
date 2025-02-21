import React from 'react';
import { StatsCardProps } from './StatsCard.types';

export default function StatsCard({
  cardTitle,
  cardValue,
  cardLastUpdated,
}: StatsCardProps) {
  return (
    <div className="max-w-sm rounded-card bg-gradient-to-r from-atom-card-background to-atom-card-to_background p-6 text-center shadow-lg">
      <h3 className="text-2xl font-semibold">{cardTitle}</h3>
      <p className="text-line-dark mt-2 text-4xl font-bold">{cardValue}</p>
      <p className="text-line mt-2 text-sm">Last updated: {cardLastUpdated}</p>
    </div>
  );
}
