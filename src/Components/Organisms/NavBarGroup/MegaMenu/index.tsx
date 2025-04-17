// src/components/MegaMenu.tsx
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link'; // Using Next.js Link
import {
  MenuColumn,
  MegaMenuProps,
  ColumnRendererProps,
} from './MegaMenu.interface'; // Import interfaces

// --- Helper Icons ---
const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ml-auto inline-block h-4 w-4 text-gray-400 group-hover:text-blue-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
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
  closeMenu = () => {},
}) => {
  // --- Desktop Rendering ---
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
        {column.title && (
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            {column.title}
          </h3>
        )}
        <ul className="space-y-1">
          {column.links.map((link) => (
            <li key={link.href} className="group">
              <Link
                href={link.href}
                className="-mx-2 flex items-center justify-between rounded p-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300"
                onClick={() => {
                  if (!isMobile) {
                    closeMenu(); /* Close menu before navigation */
                  } /* Let Next Link handle navigation */
                }}
                onMouseEnter={() =>
                  handleLinkEnter(
                    column.level,
                    link.href,
                    !!link.revealsColumnId
                  )
                }
                onMouseLeave={onMouseLeaveAnyMenuPart}
                // Add focus handling if enhancing keyboard navigation
              >
                <span className="flex-grow pr-2">{link.label}</span>
                {link.revealsColumnId && <ChevronRightIcon />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // --- Mobile Rendering ---
  if (isMobile && column) {
    return (
      <div className="w-full bg-blue-50 px-4 py-4">
        {column.level > 1 && (
          <button
            onClick={() => onMobileBackClick(column.parentColumnId)}
            className="-ml-1 mb-3 flex items-center rounded p-1 text-sm font-medium text-blue-600 hover:bg-blue-100"
            aria-label={`Back to previous menu`}
          >
            <ChevronLeftIcon /> <span className="ml-1">Back</span>
          </button>
        )}
        {column.title && (
          <h3 className="mb-2 text-sm font-semibold text-gray-800">
            {column.title}
          </h3>
        )}
        <ul className="space-y-1">
          {column.links.map((link) => (
            <li
              key={link.href}
              className="border-b border-blue-100 last:border-b-0"
            >
              <Link
                href={link.href}
                className="flex items-center justify-between py-2.5 text-sm text-gray-700"
                onClick={(e) =>
                  onMobileLinkClick(e, link.href, link.revealsColumnId)
                }
                aria-haspopup={!!link.revealsColumnId}
              >
                {link.label}
                {link.revealsColumnId && <ChevronRightIcon />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
};

// --- Main MegaMenu Component ---
const MegaMenu: React.FC<MegaMenuProps> = ({ menuData }) => {
  // Accept menuData as prop
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

  // --- Effects ---
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    const handleOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousedown', handleOutsideClick);
      clearMenuTimeout();
    };
  });

  // --- Event Handlers ---
  const clearMenuTimeout = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
  };
  const closeMenu = () => {
    // Centralized function to close menu and reset state
    setActiveMenu(null);
    setLevel1TriggerLink(null);
    setLevel2TriggerLink(null);
    setMobileVisibleColumnId(null);
    clearMenuTimeout();
  };
  const startMenuCloseTimeout = () => {
    clearMenuTimeout();
    menuTimeoutRef.current = setTimeout(closeMenu, 200);
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
        closeMenu();
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
    href: string,
    revealsColumnId?: string
  ) => {
    if (isMobile) {
      if (revealsColumnId) {
        event.preventDefault();
        setMobileVisibleColumnId(revealsColumnId);
      } else {
        closeMenu(); /* Optional: Close menu on final mobile link click */
      }
    }
  }; // Pass href if needed for analytics etc.
  const handleMobileBackClick = (parentColumnId?: string) => {
    if (isMobile && parentColumnId) {
      setMobileVisibleColumnId(parentColumnId);
    }
  };
  const isOpen = (menuId: string) => activeMenu === menuId;

  // --- Render ---
  return (
    // Root element with ref for outside click detection
    <nav
      ref={navRef}
      className="relative border-b border-gray-200 bg-white"
      aria-label="Main Navigation"
    >
      {/* Container for centering */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* List of top-level navigation items */}
        <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-1">
          {menuData.map((item) => {
            const hasMegaMenu =
              !!item.megaMenuColumns && item.megaMenuColumns.length > 0;
            const menuIsOpen = isOpen(item.id);
            const columns = item.megaMenuColumns || [];

            // Find active columns for desktop / current column for mobile based on state
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
              // Top-level List Item
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
                {/* Top Level Link (using Next.js Link) */}
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (isMobile && hasMegaMenu) {
                      e.preventDefault();
                      handleTopLevelToggle(item.id, columns);
                    } else if (!isMobile && hasMegaMenu) {
                      e.preventDefault(); /* Desktop click on parent prevented */
                    }
                  }}
                  aria-haspopup={hasMegaMenu ? 'true' : 'false'}
                  aria-expanded={hasMegaMenu ? menuIsOpen : undefined}
                  className={`flex items-center justify-between border-b-2 px-3 py-3 text-sm font-medium outline-none transition-colors duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 lg:justify-start lg:px-4 lg:py-5 ${menuIsOpen ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-700 hover:border-blue-600 hover:text-blue-600'} ${isMobile ? 'w-full border-b lg:border-b-2' : ''} `}
                  // Add keyboard handling if needed
                  // onKeyDown={(e) => handleKeyDown(e, item.id, hasMegaMenu)}
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

                {/* Mega Menu Panel Container */}
                {hasMegaMenu && (
                  <div
                    id={`megamenu-${item.id}`}
                    role="region"
                    aria-label={`${item.label} Menu`}
                    onMouseEnter={handleMouseEnterAnyMenuPart}
                    onMouseLeave={handleMouseLeaveAnyMenuPart}
                    className={`transition-opacity duration-300 ease-in-out ${menuIsOpen ? 'visible opacity-100' : 'invisible opacity-0'} ${isMobile ? 'relative w-full border-t' : 'absolute left-0 right-0 top-full'} z-20 mt-0 bg-blue-50 shadow-lg lg:border-t-0`}
                    style={{ transitionDelay: menuIsOpen ? '0ms' : '100ms' }} // Delay hiding for smoother transition off
                  >
                    {/* Inner container for padding/layout */}
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
                          closeMenu={closeMenu}
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
                            closeMenu={closeMenu}
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
                            closeMenu={closeMenu}
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
                            closeMenu={closeMenu}
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
