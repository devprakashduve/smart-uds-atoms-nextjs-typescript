import { ProgressBarProps } from './ProgressBarProps.interface';

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  height = 8,
  striped = true,
}) => {
  const progress = (value / max) * 100;
  const bgColog = 'bg-atom-progressBar-background';
  return (
    <div
      className={`bg-atom-progressBar-background/20 w-full overflow-hidden rounded-input h-${height}`}
    >
      <div
        className={`h-full transition-all duration-300 ease-in-out ${striped ? 'animate-progress-stripes bg-gradient-to-r from-transparent via-white to-transparent' : ''} ${bgColog}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
