export interface Solution {
  name: string;
  href: string;
  icon: string;
  description: string;
}

export interface CallToAction {
  name: string;
  href: string;
  icon: string;
}

export interface FlyoutMenusProps {
  solutions: Solution[];
  callsToAction: CallToAction[];
}
