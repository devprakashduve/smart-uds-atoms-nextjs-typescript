import UDSImage from '../Image';
import { AvatarProps } from './AvatarProps.interface';

const Avatar = ({
  src,
  alt = 'Avatar',
  size = 'md',
  status,
  notification,
  rounded = true,
  className = '',
  initials,
}: AvatarProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  const statusClasses = {
    online: 'bg-success',
    offline: 'bg-gray-500/50',
    busy: 'bg-error',
    away: 'bg-warning',
  };

  return (
    <div className={`relative inline-block ${sizeClasses[size]} ${className}`}>
      {src ? (
        <UDSImage
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${
            rounded ? 'rounded-full' : 'rounded-lg'
          } border-2 border-atom-avatar-background`}
        />
      ) : (
        <div
          className={`bg-atom-avatar-background ${
            rounded ? 'rounded-full' : 'rounded-lg'
          } flex h-full w-full items-center justify-center border-2 border-atom-avatar-background`}
        >
          <span className="text-lg font-medium text-atom-avatar-text">
            {initials || 'UA'}
          </span>
        </div>
      )}

      {status && (
        <span
          className={`absolute bottom-0 right-0 block animate-pulse rounded-full ring-2 ring-atom-avatar-text ${
            size === 'sm' ? 'h-2 w-2' : 'h-3 w-3'
          } ${statusClasses[status]}`}
        />
      )}

      {notification && (
        <span className="absolute -right-1 -top-1 rounded-full bg-atom-avatar-background px-2 py-1 text-xs font-bold text-atom-avatar-text">
          {notification}
        </span>
      )}
    </div>
  );
};

export default Avatar;
