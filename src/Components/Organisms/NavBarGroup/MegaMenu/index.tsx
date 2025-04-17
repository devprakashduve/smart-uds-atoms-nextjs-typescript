// src/components/MegaMenu.tsx
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

// --- Data Structure Interfaces ---
type LinkStyle = 'header' | 'default' | 'chevron';
interface LinkItem {
  label: string;
  href: string;
  styleType?: LinkStyle;
  revealsColumnId?: string;
}
// Using level and triggerLinkHref for hierarchy
interface MenuColumn {
  id: string;
  title?: string;
  level: number;
  parentColumnId?: string;
  triggerLinkHref?: string;
  links: LinkItem[];
  widthClass?: string;
}
interface MenuItem {
  id: string;
  label: string;
  href: string;
  megaMenuColumns?: MenuColumn[];
}

// --- Sample Menu Data (CLEANED - Removed 'col2-empty') ---
const menuData: MenuItem[] = [
  { id: 'home', label: 'Home', href: '/home' },
  {
    id: 'biosimilars',
    label: 'Biosimilars',
    href: '/biosimilars',
    megaMenuColumns: [
      {
        // Level 1
        id: 'col1-bio',
        level: 1,
        widthClass: 'w-60',
        links: [
          // Links that DO reveal L2 columns:
          {
            label: "Sandoz's Biosimilars",
            href: '/sandoz-biosimilars',
            styleType: 'chevron',
            revealsColumnId: 'col2-products',
          },
          // Example: { label: 'Biosimilar heritage', href: '/biosimilars/heritage', styleType: 'chevron', revealsColumnId: 'col2-heritage'},

          // Links that DO NOT reveal L2 columns (no revealsColumnId):
          {
            label: 'Biosimilar heritage',
            href: '/biosimilars/heritage',
            styleType: 'default',
          },
          {
            label: 'Biosimilar education',
            href: '/biosimilars/education',
            styleType: 'default',
          },
          {
            label: 'Impact on access',
            href: '/biosimilars/impact',
            styleType: 'default',
          },
          {
            label: 'Patient support',
            href: '/biosimilars/support',
            styleType: 'default',
          },
        ],
      },
      {
        // Level 2 - Triggered by /sandoz-biosimilars
        id: 'col2-products',
        level: 2,
        parentColumnId: 'col1-bio',
        triggerLinkHref: '/sandoz-biosimilars',
        title: 'Products',
        widthClass: 'w-60',
        links: [
          {
            label: 'ERELZI®',
            href: '/products/erelzi',
            styleType: 'chevron',
            revealsColumnId: 'col3-erelzi',
          },
          {
            label: 'HYRIMOZ®',
            href: '/products/hyrimoz',
            styleType: 'chevron',
            revealsColumnId: 'col3-hyrimoz',
          },
          {
            label: 'OMNITROPE®',
            href: '/products/omnitrope',
            styleType: 'chevron',
          },
        ],
      },
      // Example Level 2 - Triggered by /biosimilars/heritage (if added above)
      // { id: 'col2-heritage', level: 2, parentColumnId: 'col1-bio', triggerLinkHref: '/biosimilars/heritage', title: 'Heritage Details', widthClass: 'w-52', links: [ /* ... */ ]},
      {
        // Level 3 - Triggered by /products/erelzi
        id: 'col3-erelzi',
        level: 3,
        parentColumnId: 'col2-products',
        triggerLinkHref: '/products/erelzi',
        title: 'About ERELZI®',
        widthClass: 'w-72',
        links: [
          {
            label: 'Key Clinical Data',
            href: '/products/erelzi/data',
            styleType: 'default',
          },
          {
            label: 'Treatment Areas',
            href: '/products/erelzi/treatment',
            styleType: 'default',
          },
        ],
      },
      {
        // Level 3 - Triggered by /products/hyrimoz
        id: 'col3-hyrimoz',
        level: 3,
        parentColumnId: 'col2-products',
        triggerLinkHref: '/products/hyrimoz',
        title: 'About HYRIMOZ®',
        widthClass: 'w-72',
        links: [
          {
            label: 'HYRIMOZ Info 1',
            href: '/products/hyrimoz/info1',
            styleType: 'default',
          },
          {
            label: 'HYRIMOZ Info 2',
            href: '/products/hyrimoz/info2',
            styleType: 'default',
          },
        ],
      },
    ],
  },
  { id: 'products', label: 'Products', href: '/products' },
  { id: 'support', label: 'Patient support programs', href: '/support' },
  { id: 'resources', label: 'Resources', href: '/resources' },
];

// --- Helper Icons --- (Same as before)
const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ml-auto inline-block h-4 w-4 text-gray-400 group-hover:text-blue-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    {' '}
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />{' '}
  </svg>
);
const ChevronDownIcon = () => (
  <svg
    className={`ml-1 h-5 w-5 transition-transform duration-200`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    {' '}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19l-7-7 7-7"
    />{' '}
  </svg>
);

// --- Placeholder Component ---
const EmptyColumnPlaceholder: React.FC<{
  widthClass?: string;
  level: number;
}> = ({ widthClass, level }) => (
  <div
    aria-hidden="true"
    className={`flex-shrink-0 ${widthClass || (level === 2 ? 'w-60' : 'w-72')} `}
  />
);

// --- Reusable Column Renderer ---
interface ColumnRendererProps {
  /* ... same props as before ... */ column: MenuColumn | null | undefined;
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
    revealsColumnId?: string
  ) => void;
  onMobileBackClick?: (parentColumnId?: string) => void;
}
const ColumnRenderer: React.FC<ColumnRendererProps> = ({
  column,
  isMobile,
  placeholderWidthClass,
  level = 1,
  onMouseEnterAnyMenuPart = () => {},
  onMouseLeaveAnyMenuPart = () => {},
  handleLinkEnter = () => {},
  onMobileLinkClick = () => {},
  onMobileBackClick = () => {},
}) => {
  // Desktop Rendering
  if (!isMobile) {
    if (!column)
      return (
        <EmptyColumnPlaceholder
          widthClass={placeholderWidthClass}
          level={level}
        />
      );
    return (
      <div
        key={column.id}
        className={`flex-shrink-0 space-y-3 ${column.widthClass || 'w-64'}`}
        onMouseEnter={onMouseEnterAnyMenuPart}
        onMouseLeave={onMouseLeaveAnyMenuPart}
      >
        {' '}
        {column.title && (
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            {column.title}
          </h3>
        )}{' '}
        <ul className="space-y-1">
          {' '}
          {column.links.map((link) => (
            <li key={link.href} className="group">
              {' '}
              <Link
                href={link.href}
                className="-mx-2 flex items-center justify-between rounded p-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300"
                onClick={(e) => {
                  if (!isMobile) {
                    e.preventDefault();
                    window.location.href = link.href;
                  }
                }}
                onMouseEnter={() =>
                  handleLinkEnter(
                    column.level,
                    link.href,
                    !!link.revealsColumnId
                  )
                }
                onMouseLeave={onMouseLeaveAnyMenuPart}
              >
                {' '}
                <span className="flex-grow pr-2">{link.label}</span>{' '}
                {link.revealsColumnId && <ChevronRightIcon />}{' '}
              </Link>{' '}
            </li>
          ))}{' '}
        </ul>{' '}
      </div>
    );
  }
  // Mobile Rendering
  if (isMobile && column) {
    return (
      <div className="w-full bg-blue-50 px-4 py-4">
        {' '}
        {column.level > 1 && (
          <button
            onClick={() => onMobileBackClick(column.parentColumnId)}
            className="-ml-1 mb-3 flex items-center rounded p-1 text-sm font-medium text-blue-600 hover:bg-blue-100"
            aria-label={`Back to previous menu`}
          >
            {' '}
            <ChevronLeftIcon /> <span className="ml-1">Back</span>{' '}
          </button>
        )}{' '}
        {column.title && (
          <h3 className="mb-2 text-sm font-semibold text-gray-800">
            {column.title}
          </h3>
        )}{' '}
        <ul className="space-y-1">
          {' '}
          {column.links.map((link) => (
            <li
              key={link.href}
              className="border-b border-blue-100 last:border-b-0"
            >
              {' '}
              <Link
                href={link.href}
                className="flex items-center justify-between py-2.5 text-sm text-gray-700"
                onClick={(e) => onMobileLinkClick(e, link.revealsColumnId)}
                aria-haspopup={!!link.revealsColumnId}
              >
                {' '}
                {link.label} {link.revealsColumnId && <ChevronRightIcon />}{' '}
              </Link>{' '}
            </li>
          ))}{' '}
        </ul>{' '}
      </div>
    );
  }
  return null;
};

// --- Main MegaMenu Component ---
const MegaMenu: React.FC = () => {
  // --- State ---
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [level1TriggerLink, setLevel1TriggerLink] = useState<string | null>(
    null
  );
  const [level2TriggerLink, setLevel2TriggerLink] = useState<string | null>(
    null
  );
  const [mobileVisibleColumnId, setMobileVisibleColumnId] = useState<
    string | null
  >(null);
  const [isMobile, setIsMobile] = useState(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // --- Effects & Handlers --- (Keep same as previous version)
  useEffect(() => {
    /* ... Mobile detection & outside click ... */
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    const handleOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setMobileVisibleColumnId(null);
        setLevel1TriggerLink(null);
        setLevel2TriggerLink(null);
        clearMenuTimeout();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousedown', handleOutsideClick);
      clearMenuTimeout();
    };
  }, []);
  const clearMenuTimeout = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
  };
  const startMenuCloseTimeout = () => {
    clearMenuTimeout();
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setLevel1TriggerLink(null);
      setLevel2TriggerLink(null);
    }, 200);
  };
  const handleMouseEnterAnyMenuPart = () => {
    if (!isMobile) {
      clearMenuTimeout();
    }
  };
  const handleMouseLeaveAnyMenuPart = () => {
    if (!isMobile) {
      startMenuCloseTimeout();
    }
  };
  const handleTopLevelEnter = (menuId: string) => {
    if (!isMobile) {
      handleMouseEnterAnyMenuPart();
      setActiveMenu(menuId);
      setLevel1TriggerLink(null);
      setLevel2TriggerLink(null);
    }
  };
  const handleLinkEnter = (
    level: number,
    linkHref?: string | null,
    revealsColumn?: boolean
  ) => {
    if (!isMobile) {
      handleMouseEnterAnyMenuPart();
      if (linkHref && revealsColumn) {
        if (level === 1) {
          setLevel1TriggerLink(linkHref);
          setLevel2TriggerLink(null);
        } else if (level === 2) {
          setLevel2TriggerLink(linkHref);
        }
      } else if (level === 1) {
        setLevel2TriggerLink(null);
      }
    }
  };
  const handleTopLevelToggle = (menuId: string, columns?: MenuColumn[]) => {
    if (isMobile) {
      const firstLevelColId = columns?.find((c) => c.level === 1)?.id || null;
      if (activeMenu === menuId) {
        setActiveMenu(null);
        setMobileVisibleColumnId(null);
      } else {
        setActiveMenu(menuId);
        setMobileVisibleColumnId(firstLevelColId);
      }
      setLevel1TriggerLink(null);
      setLevel2TriggerLink(null);
    }
  };
  const handleMobileLinkClick = (
    event: React.MouseEvent,
    revealsColumnId?: string
  ) => {
    if (isMobile) {
      if (revealsColumnId) {
        event.preventDefault();
        setMobileVisibleColumnId(revealsColumnId);
      }
    }
  };
  const handleMobileBackClick = (parentColumnId?: string) => {
    if (isMobile && parentColumnId) {
      setMobileVisibleColumnId(parentColumnId);
    }
  };
  const isOpen = (menuId: string) => activeMenu === menuId;

  // --- Render ---
  return (
    <nav
      ref={navRef}
      className="relative border-b border-gray-200 bg-white"
      aria-label="Main Navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-1">
          {menuData.map((item) => {
            const hasMegaMenu =
              !!item.megaMenuColumns && item.megaMenuColumns.length > 0;
            const menuIsOpen = isOpen(item.id);
            const columns = item.megaMenuColumns || [];

            // Find active columns for desktop / current column for mobile
            const level1Column = menuIsOpen
              ? columns.find((c) => c.level === 1)
              : null;
            const level2Column =
              level1Column && level1TriggerLink
                ? columns.find(
                    (c) =>
                      c.level === 2 && c.triggerLinkHref === level1TriggerLink
                  )
                : null;
            const level3Column =
              level2Column && level2TriggerLink
                ? columns.find(
                    (c) =>
                      c.level === 3 && c.triggerLinkHref === level2TriggerLink
                  )
                : null;
            const currentMobileColumn =
              isMobile && menuIsOpen
                ? columns.find((c) => c.id === mobileVisibleColumnId)
                : null;

            // Determine default widths for placeholders
            const level2DefaultWidth =
              columns.find((c) => c.level === 2)?.widthClass || 'w-60';
            const level3DefaultWidth =
              columns.find((c) => c.level === 3)?.widthClass || 'w-72';

            return (
              <li
                key={item.id}
                onMouseEnter={
                  hasMegaMenu && !isMobile
                    ? () => handleTopLevelEnter(item.id)
                    : undefined
                }
                onMouseLeave={
                  hasMegaMenu && !isMobile
                    ? handleMouseLeaveAnyMenuPart
                    : undefined
                }
              >
                {/* Top Level Link */}
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (isMobile && hasMegaMenu) {
                      e.preventDefault();
                      handleTopLevelToggle(item.id, columns);
                    } else if (!isMobile && hasMegaMenu) {
                      e.preventDefault();
                    }
                  }}
                  aria-haspopup={hasMegaMenu ? 'true' : 'false'}
                  aria-expanded={hasMegaMenu ? menuIsOpen : undefined}
                  className={`flex items-center justify-between border-b-2 px-3 py-3 text-sm font-medium outline-none transition-colors duration-150 ease-in-out lg:justify-start lg:px-4 lg:py-5 ${menuIsOpen ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-700 hover:border-blue-600 hover:text-blue-600'} ${isMobile ? 'w-full border-b lg:border-b-2' : ''} `}
                >
                  {item.label}
                  {hasMegaMenu && isMobile && (
                    <span
                      className={`${menuIsOpen ? 'rotate-180' : ''} transition-transform`}
                    >
                      <ChevronDownIcon />
                    </span>
                  )}
                </Link>

                {/* Mega Menu Panel */}
                {hasMegaMenu && (
                  <div
                    id={`megamenu-${item.id}`}
                    role="region"
                    aria-label={`${item.label} Menu`}
                    onMouseEnter={handleMouseEnterAnyMenuPart}
                    onMouseLeave={handleMouseLeaveAnyMenuPart}
                    className={`transition-opacity duration-300 ease-in-out ${menuIsOpen ? 'visible opacity-100' : 'invisible opacity-0'} ${isMobile ? 'relative border-t' : 'absolute left-0 right-0 top-full'} z-20 mt-0 w-full bg-blue-50 shadow-lg lg:border-t-0`}
                    style={{ transitionDelay: menuIsOpen ? '0ms' : '100ms' }}
                  >
                    <div
                      className={`mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:py-8 ${isMobile ? '' : 'flex min-h-[200px] flex-row gap-x-8'}`}
                    >
                      {/* --- Mobile Rendering --- */}
                      {isMobile && menuIsOpen && (
                        <ColumnRenderer
                          column={currentMobileColumn}
                          isMobile={true}
                          onMobileLinkClick={handleMobileLinkClick}
                          onMobileBackClick={handleMobileBackClick}
                        />
                      )}

                      {/* --- Desktop Rendering --- */}
                      {!isMobile && menuIsOpen && (
                        <>
                          <ColumnRenderer
                            column={level1Column}
                            level={1}
                            onMouseEnterAnyMenuPart={
                              handleMouseEnterAnyMenuPart
                            }
                            onMouseLeaveAnyMenuPart={
                              handleMouseLeaveAnyMenuPart
                            }
                            handleLinkEnter={handleLinkEnter}
                            isMobile={false}
                          />
                          <ColumnRenderer
                            column={level2Column}
                            level={2}
                            placeholderWidthClass={level2DefaultWidth}
                            onMouseEnterAnyMenuPart={
                              handleMouseEnterAnyMenuPart
                            }
                            onMouseLeaveAnyMenuPart={
                              handleMouseLeaveAnyMenuPart
                            }
                            handleLinkEnter={handleLinkEnter}
                            isMobile={false}
                          />
                          <ColumnRenderer
                            column={level3Column}
                            level={3}
                            placeholderWidthClass={level3DefaultWidth}
                            onMouseEnterAnyMenuPart={
                              handleMouseEnterAnyMenuPart
                            }
                            onMouseLeaveAnyMenuPart={
                              handleMouseLeaveAnyMenuPart
                            }
                            handleLinkEnter={handleLinkEnter}
                            isMobile={false}
                          />
                        </>
                      )}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MegaMenu;
