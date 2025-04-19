// src/components/MegaMenu.tsx
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link'; // Using Next.js Link
import {
  MenuColumn,
  MegaMenuProps,
  ColumnRendererProps,
} from './MegaMenu.interface'; // Import interfaces
import Icon from '@/Components/Atoms/Icon';
import Button from '@/Components/Atoms/Button';
import UDSImage from '@/Components/Atoms/UDSImage'; // Import Image component

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
        className={`flex-shrink-0 space-y-1 py-5 ${column.widthClass || 'w-64'}`}
        onMouseEnter={onMouseEnterAnyMenuPart}
        onMouseLeave={onMouseLeaveAnyMenuPart}
      >
        {column.title && (
          <h3 className="py-2 text-sm font-semibold uppercase tracking-wider">
            {column.title}
          </h3>
        )}
        <ul className="space-y-2">
          {column.links.map((link) => (
            <li key={link.href} className="group">
              <Link
                href={link.href}
                className="-mx-2 flex items-center justify-between rounded p-2 text-sm hover:bg-atom-menu-hover hover:text-atom-menu-dark focus:outline-none focus:ring-1"
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
                {link.revealsColumnId && (
                  <Icon
                    name={'chevronRight'}
                    variant={'outline'}
                    className="h-4 w-5 group-hover:text-atom-menu-dark"
                  />
                )}
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
      <div className="w-full bg-atom-menu-light px-0">
        {column.level > 1 && (
          <Button
            variant="link"
            size="sm"
            onClick={() => onMobileBackClick(column.parentColumnId)}
            className="-ml-2 mb-3"
            aria-label={`Back to previous menu`}
          >
            <Icon
              name={'chevronLeft'}
              variant={'outline'}
              className="h-4 w-5 group-hover:text-atom-menu-dark"
            />
            <span className="ml-1">Back</span>
          </Button>
        )}
        {column.title && (
          <h3 className="text-sm font-semibold">{column.title}</h3>
        )}
        <ul className="space-y-1">
          {column.links.map((link) => (
            <li
              key={link.href}
              className="border-b border-atom-menu-dark last:border-b-0"
            >
              <Link
                href={link.href}
                className="flex items-center justify-between py-2.5 text-sm"
                onClick={(e) =>
                  onMobileLinkClick(e, link.href, link.revealsColumnId)
                }
                aria-haspopup={!!link.revealsColumnId}
              >
                {link.label}
                {link.revealsColumnId && (
                  <Icon
                    name={'chevronRight'}
                    variant={'outline'}
                    className="h-4 w-5 group-hover:text-atom-menu-dark"
                  />
                )}
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
const MegaMenu: React.FC<MegaMenuProps> = ({
  menuData,
  logoSrc,
  logoAlt = 'Logo', // Default alt text
  logoHref = '/', // Default logo link to homepage
  menuAlignment = 'left', // Default alignment
  showSearch = false,
  isLoggedIn = false,
  onSearchClick,
  onLoginClick,
  onLogoutClick,
  onSignupClick,
}) => {
  // --- State ---
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle
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
  }, []); // Run effect only once on mount

  // --- Event Handlers ---
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close any open submenus when toggling the main mobile menu
    if (isMobileMenuOpen) {
      // If closing the menu
      setActiveMenu(null);
      setMobileVisibleColumnId(null);
    }
  };

  const clearMenuTimeout = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
  };
  const closeMenu = () => {
    // Centralized function to close menu and reset state
    setActiveMenu(null);
    // Also close the mobile overlay if open
    setIsMobileMenuOpen(false);
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
        // Close the entire menu (including mobile overlay) on final link click
        closeMenu();
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
    // Root element with ref for outside click detection
    <nav
      ref={navRef}
      className="relative border-b border-atom-menu-dark bg-atom-menu-from_background bg-atom-menu-to_background bg-gradient-to-r"
      aria-label="Main Navigation"
    >
      {/* Main container with flex layout */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        {logoSrc && (
          <div className="flex-shrink-0">
            <Link href={logoHref || '/'} className="flex items-center">
              <UDSImage
                src={logoSrc}
                alt={logoAlt || 'Logo'}
                width={isMobile ? 80 : 100} // Adjust size as needed
                height={isMobile ? 30 : 40}
                className="h-auto" // Maintain aspect ratio
              />
            </Link>
          </div>
        )}

        {/* Mobile Menu Toggle Button (Hidden on lg screens) */}
        <div className="flex items-center lg:hidden">
          <Button
            variant="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Icon
              name={isMobileMenuOpen ? 'close' : 'bars3'}
              variant="outline"
              className="h-6 w-6"
            />
            {/* Use appropriate icons, added variant and className */}
          </Button>
        </div>

        {/* Desktop Menu Items & Right-side elements (Hidden below lg) */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-between">
          {/* Menu Items List - Alignment handled here */}
          <ul
            className={`flex flex-1 items-center space-x-1 ${
              menuAlignment === 'center'
                ? 'justify-center'
                : menuAlignment === 'right'
                  ? 'justify-end'
                  : 'justify-start' // Default to left
            }`}
          >
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
                    className={`flex items-center justify-between border-b-2 px-3 py-3 text-sm font-medium outline-none transition-colors duration-150 ease-in-out focus-visible:bg-atom-menu-dark focus-visible:ring-2 focus-visible:ring-offset-1 lg:justify-start lg:px-4 lg:py-5 ${menuIsOpen ? 'border-atom-menu-dark text-atom-menu-dark' : 'border-transparent hover:border-atom-menu-dark hover:text-atom-menu-dark'} ${isMobile ? 'w-full border-b lg:border-b-2' : ''} `}
                    // Add keyboard handling if needed
                    // onKeyDown={(e) => handleKeyDown(e, item.id, hasMegaMenu)}
                  >
                    {item.label}
                    {hasMegaMenu && isMobile && (
                      <span
                        className={`${menuIsOpen ? 'rotate-180' : ''} transition-transform`}
                      >
                        <Icon
                          name={'chevronDown'}
                          variant={'outline'}
                          className="h-4 w-5 group-hover:text-atom-menu-dark"
                        />
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
                      className={`bg-atom-menu-background transition-opacity duration-300 ease-in-out ${menuIsOpen ? 'visible opacity-100' : 'invisible opacity-0'} ${isMobile ? 'relative w-full border-t' : 'absolute left-0 right-0 top-full'} z-20 mt-0 lg:border-t-0`}
                      style={{ transitionDelay: menuIsOpen ? '0ms' : '100ms' }} // Delay hiding for smoother transition off
                    >
                      {/* Inner container for padding/layout */}
                      <div
                        className={`mx-auto max-w-7xl px-4 ${isMobile ? '' : 'flex min-h-[200px] flex-row gap-x-8'}`}
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

          {/* Right Side Elements (Search, Auth) - Desktop */}
          <div className="ml-4 flex flex-shrink-0 items-center space-x-4">
            {showSearch && (
              <Button
                variant="icon"
                onClick={onSearchClick}
                aria-label="Search"
              >
                <Icon name="search" variant="outline" className="h-5 w-5" />
                {/* Added variant and className */}
              </Button>
            )}
            {isLoggedIn ? (
              <Button variant="outline" size="sm" onClick={onLogoutClick}>
                {/* Changed variant */}
                Logout
              </Button>
            ) : (
              <>
                <Button variant="outline" size="sm" onClick={onLoginClick}>
                  {/* Changed variant */}
                  Login
                </Button>
                <Button variant="default" size="sm" onClick={onSignupClick}>
                  {/* Changed variant */}
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Panel --- (Displayed below header when open) */}
      {isMobile && isMobileMenuOpen && (
        <div className="border-t border-atom-menu-dark lg:hidden">
          <ul className="flex flex-col px-4 pb-3 pt-2">
            {menuData.map((item) => {
              const hasMegaMenu =
                !!item.megaMenuColumns && item.megaMenuColumns.length > 0;
              const menuIsOpen = isOpen(item.id);
              const columns = item.megaMenuColumns || [];
              const currentMobileColumn = menuIsOpen
                ? columns.find((c) => c.id === mobileVisibleColumnId)
                : null;

              return (
                // Mobile Top-level List Item
                <li key={item.id} className="border-b border-atom-menu-light">
                  {/* Mobile Top Level Link */}
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (hasMegaMenu) {
                        e.preventDefault();
                        handleTopLevelToggle(item.id, columns);
                      } else {
                        closeMenu(); // Close mobile menu on direct link click
                      }
                    }}
                    aria-haspopup={hasMegaMenu ? 'true' : 'false'}
                    aria-expanded={hasMegaMenu ? menuIsOpen : undefined}
                    className={`flex items-center justify-between py-3 text-sm font-medium outline-none transition-colors duration-150 ease-in-out focus-visible:bg-atom-menu-dark focus-visible:ring-2 focus-visible:ring-offset-1 ${menuIsOpen ? 'text-atom-menu-dark' : 'hover:text-atom-menu-dark'}`}
                  >
                    {item.label}
                    {hasMegaMenu && (
                      <span
                        className={`${menuIsOpen ? 'rotate-180' : ''} transition-transform`}
                      >
                        <Icon
                          name={'chevronDown'}
                          variant={'outline'}
                          className="h-4 w-5"
                        />
                      </span>
                    )}
                  </Link>

                  {/* Mobile Mega Menu Panel Container */}
                  {hasMegaMenu && menuIsOpen && (
                    <div
                      id={`megamenu-mobile-${item.id}`}
                      role="region"
                      aria-label={`${item.label} Menu`}
                      className={`bg-atom-menu-background transition-all duration-300 ease-in-out ${menuIsOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`} // Simple expand/collapse
                    >
                      {/* Inner container for padding/layout */}
                      <div className="px-4 pb-4 pt-2">
                        {/* --- Mobile Column Rendering --- */}
                        <ColumnRenderer
                          column={currentMobileColumn}
                          isMobile={true}
                          onMobileLinkClick={handleMobileLinkClick}
                          onMobileBackClick={handleMobileBackClick}
                          closeMenu={closeMenu}
                        />
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          {/* Auth Buttons in Mobile Menu */}
          <div className="space-y-2 border-t border-atom-menu-light px-4 py-4">
            {isLoggedIn ? (
              <Button
                variant="outline" // Changed variant
                size="sm"
                onClick={() => {
                  closeMenu();
                  onLogoutClick?.();
                }}
                className="w-full justify-center"
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  variant="outline" // Changed variant
                  size="sm"
                  onClick={() => {
                    closeMenu();
                    onLoginClick?.();
                  }}
                  className="w-full justify-center"
                >
                  Login
                </Button>
                <Button
                  variant="default" // Changed variant
                  size="sm"
                  onClick={() => {
                    closeMenu();
                    onSignupClick?.();
                  }}
                  className="w-full justify-center"
                >
                  Sign Up
                </Button>
              </>
            )}
            {/* Search Button in Mobile Menu */}
            {showSearch && (
              <Button
                variant="link" // Changed variant
                size="sm"
                onClick={() => {
                  closeMenu();
                  onSearchClick?.();
                }}
                className="w-full justify-start text-left" // Align text left
                aria-label="Search"
              >
                <Icon
                  name="search"
                  variant="outline"
                  className="mr-2 h-5 w-5"
                />
                Search {/* Added variant and className */}
              </Button>
            )}
          </div>
        </div>
      )}

      {/* --- Desktop Mega Menu Panels --- (Positioned absolutely) */}
      {/* This part remains largely the same, but is now outside the main flex container */}
      {!isMobile && (
        <div className="relative">
          {/* Container to position the absolute panels */}
          {menuData.map((item) => {
            const hasMegaMenu =
              !!item.megaMenuColumns && item.megaMenuColumns.length > 0;
            const menuIsOpen = isOpen(item.id);
            const columns = item.megaMenuColumns || [];
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
            const level2DefaultWidth =
              columns.find((c) => c.level === 2)?.widthClass || 'w-60';
            const level3DefaultWidth =
              columns.find((c) => c.level === 3)?.widthClass || 'w-72';

            // Extract featured product props for the current item
            const {
              featuredProductImageSrc,
              featuredProductImageAlt,
              featuredProductTitle,
              featuredProductHref,
            } = item;

            return (
              hasMegaMenu && (
                <div
                  key={`desktop-panel-${item.id}`}
                  id={`megamenu-${item.id}`}
                  role="region"
                  aria-label={`${item.label} Menu`}
                  onMouseEnter={handleMouseEnterAnyMenuPart}
                  onMouseLeave={handleMouseLeaveAnyMenuPart}
                  className={`bg-atom-menu-background transition-opacity duration-300 ease-in-out ${menuIsOpen ? 'visible opacity-100' : 'invisible opacity-0'} absolute left-0 right-0 top-0 z-20 border-t border-atom-menu-dark`} // Adjusted top-0
                  style={{ transitionDelay: menuIsOpen ? '0ms' : '100ms' }}
                >
                  <div className="mx-auto flex min-h-[200px] max-w-7xl flex-row gap-x-8 px-4">
                    <ColumnRenderer
                      column={level1Column}
                      level={1}
                      onMouseEnterAnyMenuPart={handleMouseEnterAnyMenuPart}
                      onMouseLeaveAnyMenuPart={handleMouseLeaveAnyMenuPart}
                      handleLinkEnter={handleLinkEnter}
                      isMobile={false}
                      closeMenu={closeMenu}
                    />
                    <ColumnRenderer
                      column={level2Column}
                      level={2}
                      placeholderWidthClass={level2DefaultWidth}
                      onMouseEnterAnyMenuPart={handleMouseEnterAnyMenuPart}
                      onMouseLeaveAnyMenuPart={handleMouseLeaveAnyMenuPart}
                      handleLinkEnter={handleLinkEnter}
                      isMobile={false}
                      closeMenu={closeMenu}
                    />
                    <ColumnRenderer
                      column={level3Column}
                      level={3}
                      placeholderWidthClass={level3DefaultWidth}
                      onMouseEnterAnyMenuPart={handleMouseEnterAnyMenuPart}
                      onMouseLeaveAnyMenuPart={handleMouseLeaveAnyMenuPart}
                      handleLinkEnter={handleLinkEnter}
                      isMobile={false}
                      closeMenu={closeMenu}
                    />
                    {/* --- Featured Product Section (Desktop Only) --- */}
                    {featuredProductImageSrc && featuredProductTitle && (
                      <div className="my-5 w-40 flex-shrink-0 border-l border-atom-menu-light">
                        {' '}
                        {/* Adjust width and spacing as needed */}
                        {featuredProductHref ? (
                          <Link
                            href={featuredProductHref}
                            className="group block"
                          >
                            <UDSImage
                              src={featuredProductImageSrc}
                              alt={
                                featuredProductImageAlt || featuredProductTitle
                              }
                              width={200} // Adjust size
                              height={150}
                              className="mb-2 h-auto w-full rounded object-cover transition-opacity group-hover:opacity-80"
                            />
                            <p className="text-sm font-medium transition-colors group-hover:text-atom-menu-dark">
                              {featuredProductTitle}
                            </p>
                          </Link>
                        ) : (
                          <div>
                            <UDSImage
                              src={featuredProductImageSrc}
                              alt={
                                featuredProductImageAlt || featuredProductTitle
                              }
                              width={200}
                              height={150}
                              className="mb-2 h-auto w-full rounded object-cover"
                            />
                            <p className="text-sm font-medium">
                              {featuredProductTitle}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default MegaMenu;
