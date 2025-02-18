import { LabelProps } from './LabelProps.interface';
import { classNames } from '@/Components/Utilities/componentsMethods';

const Label: React.FC<LabelProps> = ({ children, htmlFor, className }) => {
  const labelClass = classNames(
    `text-atom-input-text hover:text-atom-input-text/40 block`,
    className
  );
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}
    </label>
  );
};

export default Label;
