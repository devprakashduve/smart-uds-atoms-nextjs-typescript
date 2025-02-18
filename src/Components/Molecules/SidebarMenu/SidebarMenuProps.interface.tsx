export interface MenuItem {
  label: string; // The text displayed for the menu item
  icon?: React.ReactNode; // Optional icon for the menu item
  link?: string; // CustomLink for navigation
  subMenu?: MenuItem[]; // Nested submenu items
}

export interface SidebarMenuProps {
  items: MenuItem[]; // Array of menu items
  isCollapsed?: boolean; // Toggle for collapsing the sidebar
  onMenuItemClick?: (item: MenuItem) => void; // Callback when a menu item is clicked
  className?: string; // Optional additional className for the sidebar
}
