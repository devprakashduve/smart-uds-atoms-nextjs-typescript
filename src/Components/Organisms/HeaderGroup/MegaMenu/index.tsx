import Button from '@/Components/Atoms/Button';
import React, { useState } from 'react';
import { MegaMenuProps } from './MegaMenu.interface';
import CustomLink from '@/Components/Atoms/CustomLink';

const MegaMenu: React.FC<MegaMenuProps> = ({
  home,
  company,
  marketplace,
  resources,
  contact,
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
    <nav className="bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-3">
        <CustomLink
          href="https://uds.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://uds.com/docs/images/logo.svg"
            className="h-8"
            alt="uds Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            uds
          </span>
        </CustomLink>
        <Button
          onClick={toggleMobileMenu}
          data-collapse-toggle="mega-menu-full-image"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full-image"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </Button>
        <div
          id="mega-menu-full-image"
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
                onClick={toggleCompanyDropdown}
                data-collapse-toggle="mega-menu-full-image-dropdown"
                className="flex w-full items-center justify-between border-b border-gray-100 px-3 py-2 font-medium text-gray-900 hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                {company}
                <svg
                  className="ms-3 h-2.5 w-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
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
        id="mega-menu-full-image-dropdown"
        className={`${
          isCompanyDropdownOpen ? 'block' : 'hidden'
        } mt-1 border-gray-200 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800`}
      >
        <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-sm text-gray-500 md:grid-cols-3 md:px-6 dark:text-gray-400">
          <ul
            className="mb-4 hidden space-y-4 md:block"
            aria-labelledby="mega-menu-full-image-Button"
          >
            <li>
              <CustomLink href="#">Online Stores</CustomLink>
            </li>
            <li>
              <CustomLink href="#">Segmentation</CustomLink>
            </li>
            <li>
              <CustomLink href="#">Marketing CRM</CustomLink>
            </li>
            <li>
              <CustomLink href="#">Online Stores</CustomLink>
            </li>
          </ul>
          <ul className="mb-4 space-y-4">
            <li>
              <CustomLink href="#">Our Blog</CustomLink>
            </li>
            <li>
              <CustomLink href="#">Terms & Conditions</CustomLink>
            </li>
            <li>
              <CustomLink href="#">License</CustomLink>
            </li>
            <li>
              <CustomLink href="#">Resources</CustomLink>
            </li>
          </ul>
          <div
            className="rounded-lg bg-gray-500 bg-cover bg-center bg-no-repeat p-8 bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
            style={{
              backgroundImage: 'url(/docs/images/dashboard-overview.png)',
            }}
          >
            <CustomLink href="#">
              <p className="mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-white">
                Preview the new uds dashboard navigation.
              </p>
              <Button className="inline-flex items-center rounded-lg border border-white bg-transparent px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700">
                Get started
                <svg
                  className="ms-2 h-3 w-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Button>
            </CustomLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MegaMenu;
