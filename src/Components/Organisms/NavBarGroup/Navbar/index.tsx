import Button from '@/Components/Atoms/Button';
import Icon from '@/Components/Atoms/Icon';
import CustomLink from '@/Components/Atoms/CustomLink';
import React, { useState } from 'react';

interface CustomLink {
  name: string;
  href: string;
  subCustomLinks?: CustomLink[];
}

interface NavbarProps {
  logo: string;
  links: CustomLink[];
}

interface DropdownMenuProps {
  isOpen: boolean;
  subCustomLinks: CustomLink[];
}

interface MobileMenuProps {
  isOpen: boolean;
  links: CustomLink[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  subCustomLinks,
}) =>
  isOpen ? (
    <div className="mt-0 w-full min-w-48 rounded-menu bg-menu-background bg-gradient-to-r from-menu-from_background to-menu-to_background p-1">
      {subCustomLinks.map((link) => (
        <CustomLink
          key={link.name}
          href={link.href}
          className="block w-full rounded-menu px-4 py-2 hover:bg-menu-hover"
        >
          {link.name}
        </CustomLink>
      ))}
    </div>
  ) : null;

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let Elements = null;
  isOpen
    ? (Elements = (
        <div className="rounded-menu bg-menu-background bg-gradient-to-r from-menu-from_background to-menu-to_background p-1 text-left shadow-lg">
          {links.map((link) =>
            link.subCustomLinks ? (
              <div key={link.name} className="relative">
                <CustomLink
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex w-full items-center justify-between rounded-menu px-4 py-2 hover:bg-menu-hover"
                  href={'#'}
                  underlineHover={false}
                >
                  {link.name}
                  <Icon name={'chevronDown'} variant={'solid'} />
                </CustomLink>
                <div className="pl-4">
                  <DropdownMenu
                    isOpen={isDropdownOpen}
                    subCustomLinks={link.subCustomLinks}
                  />
                </div>
              </div>
            ) : (
              <CustomLink
                key={link.name}
                href={link.href}
                underlineHover={false}
                className="block rounded-menu px-4 py-2 hover:bg-menu-hover"
              >
                {link.name}
              </CustomLink>
            )
          )}
        </div>
      ))
    : null;

  return Elements;
};

const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCustomLink, setActiveCustomLink] = useState<string | null>(null);

  const handleCustomLinkClick = (linkName: string) => {
    setActiveCustomLink(() =>
      linkName === activeCustomLink ? null : linkName
    );
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="rounded-menu bg-menu-background bg-gradient-to-r from-menu-from_background to-menu-to_background p-1 text-center">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-6 sm:flex">
            {links.map((link) =>
              link.subCustomLinks ? (
                <div key={link.name} className="relative">
                  <CustomLink
                    onClick={() => handleCustomLinkClick(link.name)}
                    className={`flex items-center hover:text-menu-dark ${activeCustomLink === link.name ? 'underline' : ''}`}
                    href={'#'}
                  >
                    {link.name}
                    <Icon name={'chevronDown'} variant={'solid'} />
                  </CustomLink>
                  <div className="absolute top-11">
                    <DropdownMenu
                      isOpen={isDropdownOpen && activeCustomLink === link.name}
                      subCustomLinks={link.subCustomLinks}
                    />
                  </div>
                </div>
              ) : (
                <CustomLink
                  key={link.name}
                  href={link.href}
                  className={activeCustomLink === link.name ? 'underline' : ''}
                  onClick={() => handleCustomLinkClick(link.name)}
                >
                  {link.name}
                </CustomLink>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button variant="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <Icon
                  name={'close'}
                  variant={'solid'}
                  className="text-menu-dark transition-all hover:text-menu"
                />
              ) : (
                <Icon
                  name={'bars3'}
                  variant={'solid'}
                  className="text-menu-dark transition-all hover:text-menu"
                />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} links={links} />
    </nav>
  );
};

export default Navbar;
