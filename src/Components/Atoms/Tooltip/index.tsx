import { classNames } from '@/Components/Utilities/componentsMethods';
import './Tooltip.css';

export default function Tooltip({
  content,
  children,
  setBackground,
  isBackground = false,
  isRounded = false,
}: TooltipProps) {
  const tooltipClasses = classNames(
    'p-2 text-center text-xs ',
    `${isBackground ? 'bg-btn-dark text-btn-light' : 'border border-btn-dark text-btn-dark'}`,
    setBackground,
    ` ${isRounded ? 'rounded' : ''}`
  );
  const tipClasses = classNames(
    'clip-bottom h-5 w-4 bg-btn-dark text-btn-light ',
    setBackground
  );
  return (
    <span className="group relative flex max-w-max flex-col items-center justify-center">
      {children}
      <span className="absolute left-1/2 top-8 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100">
        <span className="flex max-w-xs flex-col items-center">
          <span className={tipClasses}></span>
          <span className={tooltipClasses}>{content}</span>
        </span>
      </span>
    </span>
  );
}
