import { DividerProps } from './DividerProps.interface';
import { classNames } from '@/Components/Utilities/componentsMethods';

const Divider: React.FC<DividerProps> = ({
  thickness = 'medium',
  className,
}) => {
  const dividerClasses = classNames(
    `divider ${thickness === 'thin' && 'border-t-2'} ${thickness === 'medium' && 'border-t-4'} ${thickness === 'thick' && 'border-t-8'} border-atom-input`,
    className
  );
  return <div className={dividerClasses} />;
};

export default Divider;
