export interface AppHeaderProps {
  logo: string; // URL or name of the logo image
  navigationCustomLinks: { label: string; url: string }[]; // CustomLinks to display in the header navigation
  onSearch?: (query: string) => void; // Optional search handler
}
