// src/components/MegaMenu.interfaces.ts

/** Defines the visual style options for a link item. */
export type LinkStyle = 'header' | 'default' | 'chevron';

/** Represents a single navigable link within a menu column. */
export interface LinkItem {
  label: string; // Text displayed for the link
  href: string; // Target URL for the link
  styleType?: LinkStyle; // Optional style override
  revealsColumnId?: string; // Optional ID of a MenuColumn this link reveals on hover (desktop)
}

/** Represents a single column within the mega menu panel. */
export interface MenuColumn {
  id: string; // Unique identifier for the column
  title?: string; // Optional title displayed above the column
  level: number; // Hierarchy level (1, 2, 3...) - determines visibility based on triggers
  parentColumnId?: string; // ID of the parent column (used for mobile 'Back' button)
  triggerLinkHref?: string; // The href of the LinkItem in the parent column that reveals this column
  links: LinkItem[]; // Array of links within this column
  widthClass?: string; // Optional Tailwind CSS class for width (e.g., 'w-60')
}

/** Represents a top-level item in the main navigation bar. */
export interface MenuItem {
  id: string; // Unique identifier for the top-level item
  label: string; // Text displayed for the top-level link
  href: string; // Target URL for the top-level link
  megaMenuColumns?: MenuColumn[]; // Optional array of columns displayed in the mega menu for this item
  // Optional featured product display within the mega menu panel
  featuredProductImageSrc?: string;
  featuredProductImageAlt?: string;
  featuredProductTitle?: string;
  featuredProductHref?: string; // Optional link for the featured product
}

/** Defines the alignment options for the main menu items. */
export type MenuAlignment = 'left' | 'center' | 'right';

/** Props for the main MegaMenu component */
export interface MegaMenuProps {
  menuData: MenuItem[]; // Array of top-level menu items and their potential columns/links
  logoSrc?: string; // Optional URL for the logo image
  logoAlt?: string; // Optional alt text for the logo image
  logoHref?: string; // Optional link for the logo
  logoNode?: React.ReactNode; // Optional custom logo element (takes precedence over logoSrc)
  menuAlignment?: MenuAlignment; // How to align the main menu items (default: 'left')
  showSearch?: boolean; // Whether to show the search icon (default: false)
  isLoggedIn?: boolean; // Whether the user is currently logged in (controls Login/Logout visibility)
  // Search callbacks / controlled value
  onSearchClick?: (query?: string) => void; // Callback when search is submitted (receives optional query)
  searchValue?: string; // Controlled search input value
  onSearchChange?: (val: string) => void; // Controlled input change handler
  searchPlaceholder?: string; // Optional placeholder text for search inputs
  searchData?: { name: string; href: string }[]; // Optional additional search items to include in results
  cart?: React.ReactNode; // Optional custom cart element to render on the right
  onLoginClick?: () => void; // Callback when Login button is clicked
  onLogoutClick?: () => void; // Callback when Logout button is clicked
  onSignupClick?: () => void; // Callback when Signup button is clicked
}

// --- Reusable Column Renderer ---
export interface ColumnRendererProps {
  column: MenuColumn | null | undefined;
  isMobile: boolean;
  placeholderWidthClass?: string;
  level?: number;
  onMouseEnterAnyMenuPart?: () => void;
  onMouseLeaveAnyMenuPart?: () => void;
  handleLinkEnter?: (
    level: number,
    linkHref?: string | null,
    revealsColumn?: boolean
  ) => void;
  onMobileLinkClick?: (
    event: React.MouseEvent,
    href: string,
    revealsColumnId?: string
  ) => void;
  onMobileBackClick?: (parentColumnId?: string) => void;
  closeMenu?: () => void; // Function to close the entire menu
}
