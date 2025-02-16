import UDSImage from '../Image';
import { AvatarProps } from './AvatarProps.interface';

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 16,
  className = '',
  width = 105,
  height = 105,
  circle = false,
  rounded = false,
  initials,
  status,
}) => {
  const containerClasses = `w-${size} h-${size} relative overflow-hidden ${
    rounded ? 'rounded' : ''
  } ${circle ? 'rounded-full' : ''} ${className}`;

  const imgClasses = 'w-full h-full object-cover';

  return (
    <div className={containerClasses}>
      {src ? (
        <UDSImage
          className={imgClasses}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      ) : (
        <div className="... bg-atom-avatar-background">{initials}</div>
      )}
      {status && <div className={`... absolute`} />}
    </div>
  );
};

export default Avatar;
