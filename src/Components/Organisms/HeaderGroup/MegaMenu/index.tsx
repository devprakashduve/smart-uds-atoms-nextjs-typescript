import Button from '@/Components/Atoms/Button';
import React, { useState } from 'react';
import { MegaMenuProps, MenuItem, CompanyLink } from './MegaMenu.interface';
import CustomLink from '@/Components/Atoms/CustomLink';
import Icon from '@/Components/Atoms/Icon';
import UDSImage from '@/Components/Atoms/UDSImage';

const MegaMenu: React.FC<MegaMenuProps> = ({
  logo,
  menuItems,
  dropdownLinks,
  contact,
  previewDashboard,
  getStarted,
  udsLogoAlt,
  udsText,
  backgroundImage,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-atom-menu-background bg-gradient-to-r from-atom-menu-from_background to-atom-menu-to_background shadow-xl">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-3">
        <CustomLink
          href="https://uds.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {logo && (
            <UDSImage
              src={logo}
              alt={udsLogoAlt || 'logo'}
              className="size-12 rounded-full"
            />
          )}
          {udsText && (
            <span className="self-center whitespace-nowrap text-2xl font-semibold">
              {udsText}
            </span>
          )}
        </CustomLink>
        <Button
          variant="icon"
          onClick={toggleMobileMenu}
          data-collapse-toggle="mega-atom-menu-full-image"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm md:hidden"
          aria-controls="mega-atom-menu-full-image"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <Icon name="close" className="size-8" variant={'outline'} />
          ) : (
            <Icon name="bars3" className="size-8" variant={'outline'} />
          )}
        </Button>

        <div
          id="mega-atom-menu-full-image"
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } w-full md:order-1 md:flex md:w-auto`}
        >
          <ul className="mt-4 flex flex-col font-medium md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
            {menuItems?.map((menuItem: MenuItem) => (
              <li key={menuItem.label}>
                {menuItem.children ? (
                  <Button
                    variant="link"
                    size="null"
                    onClick={toggleDropdown}
                    data-collapse-toggle="mega-atom-menu-full-image-dropdown"
                  >
                    {menuItem.label}
                    <Icon
                      name="chevronDown"
                      className="ms-2 size-6"
                      variant={'outline'}
                    />
                  </Button>
                ) : (
                  <CustomLink href={menuItem.href || '#'}>
                    {menuItem.label}
                  </CustomLink>
                )}
              </li>
            ))}
            {contact && (
              <li>
                <CustomLink href="#">{contact}</CustomLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div
        id="mega-atom-menu-full-image-dropdown"
        className={`${isDropdownOpen ? 'block' : 'hidden'} mt-1`}
      >
        <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-sm md:grid-cols-3 md:px-6">
          <ul
            className="mb-4 hidden space-y-4 md:block"
            aria-labelledby="mega-atom-menu-full-image-Button"
          >
            {dropdownLinks?.map((dropdownLink: CompanyLink) => (
              <li key={dropdownLink.label}>
                <CustomLink href={dropdownLink.href}>
                  {dropdownLink.label}
                </CustomLink>
              </li>
            ))}
          </ul>

          <div
            className="rounded-lg bg-atom-menu-background bg-cover bg-center bg-no-repeat p-8 bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <CustomLink href="#">
              <p className="text-atom-menu-text mb-5 max-w-xl font-extrabold leading-tight tracking-tight">
                {previewDashboard}
              </p>
              <Button variant="outline">
                {getStarted}
                <Icon
                  name="arrowRight"
                  className="ms-2 size-4"
                  variant={'outline'}
                />
              </Button>
            </CustomLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MegaMenu;
