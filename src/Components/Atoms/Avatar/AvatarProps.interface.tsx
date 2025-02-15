export interface AvatarProps {
  src?: string;
  alt: string;
  size?: number;
  initials?: string;
  width?: number;
  height?: number;
  className?: string;
  circle?: boolean;
  rounded?: boolean;
  status?: 'online' | 'offline' | 'away' | 'busy';
}
