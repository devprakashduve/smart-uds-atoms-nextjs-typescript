import { IconProps } from '../../Atoms/Icon/IconProps.interface';
import React from 'react';

export interface SidebarItem {
  id: string | number;
  label: string;
  href: string;
  iconName?: IconProps['name'];
}

export interface SidebarProps {
  items: SidebarItem[];
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  isCollapsed?: boolean;
  collapsible?: boolean;
}
