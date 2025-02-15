export interface DashboardSideBarProps {
  navigationCustomLinks: { label: string; icon: string; url: string }[]; // Navigation links in the sidebar
  logo: string; // URL or name of the logo image
  onCustomLinkClick?: (url: string) => void; // Optional function to handle link clicks
}
