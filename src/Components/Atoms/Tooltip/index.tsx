import { classNames } from '@/Components/Utilities/componentsMethods';
import { TooltipProps } from './TooltipProps.interface';

const styles = {
  clipBottom: {
    clipPath: 'polygon(100% 0, 50% 100%, 0 100%)',
  },
};

export default function Tooltip({
  content,
  children,
  setBackground,
  isBackground = false,
  isRounded = false,
}: TooltipProps) {
  const tooltipClasses = classNames(
    'p-2 text-center text-xs ',
    `${isBackground ? 'bg-atom-btn-dark text-atom-btn-light' : 'border border-atom-btn-dark text-atom-btn-dark'}`,
    setBackground,
    ` ${isRounded ? 'rounded' : ''}`
  );
  const tipClasses = classNames(
    'h-5 w-4 bg-atom-btn-dark text-atom-btn-light',
    setBackground
  );
  return (
    <span className="group relative flex max-w-max flex-col items-center justify-center">
      {children}
      <span className="absolute left-1/2 top-8 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100">
        <span className="flex max-w-xs flex-col items-center">
          <span className={tipClasses} style={styles.clipBottom}></span>
          <span className={tooltipClasses}>{content}</span>
        </span>
      </span>
    </span>
  );
}
