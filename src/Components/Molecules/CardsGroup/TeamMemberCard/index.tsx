import React from 'react';
import Img from '@/Components/Atoms/Img';

import CustomLink from '@/Components/Atoms/CustomLink';
import Button from '@/Components/Atoms/Button';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  linkedInUrl: string;
  gitHubUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  imageUrl,
  linkedInUrl,
  gitHubUrl,
}) => {
  return (
    <div className="max-w-sm rounded-lg bg-white p-6 text-center shadow-lg">
      <Img
        className="mx-auto h-24 w-24 rounded-full border-2 border-gray-300"
        src={imageUrl}
        alt={name}
      />
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
      <div className="mt-4 flex justify-center space-x-2">
        <Button
          href="https://example.com"
          icon={<ArrowUpRightIcon />}
          iconPosition="left"
          target="_blank"
          variant="link"
        >
          CustomLinkedIn
        </Button>
        <Button
          href="https://example.com"
          icon={<ArrowUpRightIcon />}
          iconPosition="right"
          target="_blank"
          variant="link"
          className="text-gray-500"
        >
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default TeamMemberCard;
