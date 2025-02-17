export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'busy' | 'away';
  notification?: string | number;
  rounded?: boolean;
  className?: string;
  initials?: string;
}
