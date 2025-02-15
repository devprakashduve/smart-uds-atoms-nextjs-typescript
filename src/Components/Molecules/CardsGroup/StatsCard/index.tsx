import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  lastUpdated: string;
}

export default function StatsCard({
  title,
  value,
  lastUpdated,
}: StatsCardProps) {
  return (
    <div className="max-w-sm rounded-lg bg-white p-6 text-center shadow-lg">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-4xl font-bold text-line-dark">{value}</p>
      <p className="mt-2 text-sm text-line">Last updated: {lastUpdated}</p>
    </div>
  );
}
