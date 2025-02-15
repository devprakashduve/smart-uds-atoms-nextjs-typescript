import Button from '@/Components/Atoms/Button';
import { JobCardProps } from './JobCard.interface';

export default function JobCard({
  title,
  company,
  description,
  location,
  salary,
}: JobCardProps) {
  return (
    <div className="from-card-background to-card-to_background max-w-sm rounded-lg bg-gradient-to-r p-6 shadow-lg">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-card-dark/80 text-sm">Company: {company}</p>
      <p className="text-card-dark/90 mt-2 text-sm">{description}</p>
      <div className="text-card-dark/90 mt-4 flex justify-between text-sm">
        <span>📍 {location}</span>
        <span>💰 {salary}</span>
      </div>
      <Button className="mt-4">Apply Now</Button>
    </div>
  );
}
