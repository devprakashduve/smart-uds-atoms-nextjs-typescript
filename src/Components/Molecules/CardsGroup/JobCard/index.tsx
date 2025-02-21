import Button from '@/Components/Atoms/Button';
import { JobCardProps } from './JobCard.interface';

export default function JobCard({
  title,
  company,
  description,
  location,
  salary,
  btnText,
}: JobCardProps) {
  return (
    <div className="max-w-sm rounded-card bg-gradient-to-r from-atom-card-background to-atom-card-to_background p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-atom-card-dark">{title}</h3>
      <p className="text-sm">Company: {company}</p>
      <p className="mt-2 text-sm">{description}</p>
      <div className="mt-4 flex justify-between text-sm">
        <span>📍 {location}</span>
        <span>💰 {salary}</span>
      </div>
      <Button className="mt-4">{btnText}</Button>
    </div>
  );
}
