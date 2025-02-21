import Button from '@/Components/Atoms/Button';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import UDSImage from '@/Components/Atoms/Image';
import { TeamMemberCardProps } from './types';

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  imageUrl,
  linkedInUrl,
  linkedInText,
  gitHubUrl,
  gitHubText,
}) => {
  return (
    <div className="from-atom-card-background to-atom-card-to_background rounded-card max-w-sm bg-gradient-to-r p-6 text-center shadow-lg">
      <UDSImage
        className="mx-auto h-24 w-24 rounded-full border-2"
        src={imageUrl}
        alt={name}
      />
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <p className="text-atom-card-dark/80">{role}</p>
      <div className="mt-4 flex justify-center space-x-2">
        <Button
          href={linkedInUrl}
          icon={<ArrowUpRightIcon />}
          iconPosition="left"
          target="_blank"
          variant="link"
        >
          {linkedInText}
        </Button>
        <Button
          href={gitHubUrl}
          icon={<ArrowUpRightIcon />}
          iconPosition="right"
          target="_blank"
          variant="link"
          className=""
        >
          {gitHubText}
        </Button>
      </div>
    </div>
  );
};

export default TeamMemberCard;
