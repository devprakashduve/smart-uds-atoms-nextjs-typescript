interface ListItem {
  id?: number;
  name: string;
  subText?: string;
  role?: string;
  avatar?: string;
  status?: 'Online' | 'Offline';
  lastSeen?: string;
}

export interface ListProps {
  items: ListItem[];
  ordered?: boolean;
  className?: string;
}
