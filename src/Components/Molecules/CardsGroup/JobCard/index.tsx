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
    <div className="from-atom-card-background to-atom-card-to_background rounded-card max-w-sm bg-gradient-to-r p-6 shadow-lg">
      <h3 className="text-atom-card-dark text-lg font-semibold">{title}</h3>
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
