import Button from '@/Components/Atoms/Button';
import React, { useState } from 'react';
import { MegaMenuProps } from './MegaMenu.interface';
import CustomLink from '@/Components/Atoms/CustomLink';
import Icon from '@/Components/Atoms/Icon';
import UDSImage from '@/Components/Atoms/UDSImage';

const MegaMenu: React.FC<MegaMenuProps> = ({
  home,
  company,
  marketplace,
  resources,
  contact,
  onlineStores,
  segmentation,
  marketingCRM,
  ourBlog,
  termsConditions,
  previewDashboard,
  getStarted,
  udsLogoAlt,
  udsText,
  backgroundImage,
  logo,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCompanyDropdown = () => {
    setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
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
              alt={udsLogoAlt}
              className="size-12 rounded-full"
            />
          )}
          {udsText && (
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
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
            <li>
              <CustomLink href="#" aria-current="page">
                {home}
              </CustomLink>
            </li>
            <li>
              <Button
                variant="link"
                size="null"
                onClick={toggleCompanyDropdown}
                data-collapse-toggle="mega-atom-menu-full-image-dropdown"
              >
                {company}
                <Icon
                  name="chevronDown"
                  className="ms-2 size-6"
                  variant={'outline'}
                />
              </Button>
            </li>
            <li>
              <CustomLink href="#">{marketplace}</CustomLink>
            </li>
            <li>
              <CustomLink href="#">{resources}</CustomLink>
            </li>
            <li>
              <CustomLink href="#">{contact}</CustomLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="mega-atom-menu-full-image-dropdown"
        className={`${isCompanyDropdownOpen ? 'block' : 'hidden'} mt-1`}
      >
        <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-sm md:grid-cols-3 md:px-6">
          <ul
            className="mb-4 hidden space-y-4 md:block"
            aria-labelledby="mega-atom-menu-full-image-Button"
          >
            <li>
              <CustomLink href="#">{onlineStores}</CustomLink>
            </li>
            <li>
              <CustomLink href="#">{segmentation}</CustomLink>
            </li>
            <li>
              <CustomLink href="#">{marketingCRM}</CustomLink>
            </li>
            <li>
              <CustomLink href="#">{onlineStores}</CustomLink>
            </li>
          </ul>
          <ul className="mb-4 space-y-4">
            <li>
              <CustomLink href="#">{ourBlog}</CustomLink>
            </li>
            <li>
              <CustomLink href="#">{termsConditions}</CustomLink>
            </li>
            <li>
              <CustomLink href="#">{resources}</CustomLink>
            </li>
          </ul>
          <div
            className="rounded-lg bg-gray-500 bg-cover bg-center bg-no-repeat p-8 bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <CustomLink href="#">
              <p className="mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-white">
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
