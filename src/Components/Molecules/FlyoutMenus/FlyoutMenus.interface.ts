export interface FlyoutMenusProps {
  solutions: ListItemProps[];
  callsToAction: ActionItemProps[];
}

export interface ListItemProps {
  name: string;
  href: string;
  icon: string;
  description: string;
}

export interface ActionItemProps {
  name: string;
  href: string;
  icon: string;
}
