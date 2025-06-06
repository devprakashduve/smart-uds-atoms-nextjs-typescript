import Button from '@/Components/Atoms/Button';
import Icon from '@/Components/Atoms/Icon';
import CustomLink from '@/Components/Atoms/CustomLink';
import React, { useState } from 'react';
import UDSImage from '@/Components/Atoms/UDSImage';
import {
  DropdownMenuProps,
  MobileMenuProps,
  NavbarProps,
  CustomLink as NavbarLink,
} from './NavbarProps.interface';

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  subCustomLinks,
}) =>
  isOpen ? (
    <div className="rounded-menu bg-menu-background from-menu-from_background to-menu-to_background mt-0 w-full min-w-48 bg-gradient-to-r p-1">
      {subCustomLinks.map((link) => (
        <CustomLink
          key={link.name}
          href={link.href}
          className="rounded-menu hover:bg-menu-hover block w-full px-4 py-2"
        >
          {link.name}
        </CustomLink>
      ))}
    </div>
  ) : null;

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let Elements = null;
  if (isOpen) {
    Elements = (
      <div className="rounded-menu bg-menu-background from-menu-from_background to-menu-to_background bg-gradient-to-r p-1 text-left shadow-lg">
        {links.map((link) =>
          link.subCustomLinks ? (
            <div key={link.name} className="relative">
              <CustomLink
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="rounded-menu hover:bg-menu-hover flex w-full items-center justify-between px-4 py-2"
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
              className="rounded-menu hover:bg-menu-hover block px-4 py-2"
            >
              {link.name}
            </CustomLink>
          )
        )}
      </div>
    );
  }

  return Elements;
};

const LogoSection: React.FC<{ logo: string; altText: string }> = ({
  logo,
  altText,
}) => (
  <div className="flex items-center">
    <CustomLink href="/" className="text-2xl font-bold">
      <UDSImage src={logo} alt={altText} className="h-8 w-auto" />
    </CustomLink>
  </div>
);

const DesktopMenuSection: React.FC<{
  links: NavbarLink[];
  activeCustomLink: string | null;
  isDropdownOpen: boolean;
  handleCustomLinkClick: (linkName: string) => void;
  DropdownMenuComponent: React.FC<DropdownMenuProps>;
}> = ({
  links,
  activeCustomLink,
  isDropdownOpen,
  handleCustomLinkClick,
  DropdownMenuComponent,
}) => (
  <div className="hidden items-center space-x-6 sm:flex">
    {links.map((link) =>
      link.subCustomLinks ? (
        <div key={link.name} className="relative">
          <CustomLink
            onClick={() => handleCustomLinkClick(link.name)}
            className={`hover:text-menu-dark flex items-center ${activeCustomLink === link.name ? 'underline' : ''}`}
            href={'#'}
          >
            {link.name}
            <Icon name={'chevronDown'} variant={'solid'} />
          </CustomLink>
          <div className="absolute top-11">
            <DropdownMenuComponent
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
);

const MobileMenuButtonSection: React.FC<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}> = ({ isOpen, setIsOpen }) => (
  <div className="flex items-center md:hidden">
    <Button variant="icon" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <Icon
          name={'close'}
          variant={'solid'}
          className="text-menu-dark hover:text-menu transition-all"
        />
      ) : (
        <Icon
          name={'bars3'}
          variant={'solid'}
          className="text-menu-dark hover:text-menu transition-all"
        />
      )}
    </Button>
  </div>
);

const Navbar: React.FC<NavbarProps> = ({ logo, altText, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCustomLink, setActiveCustomLink] = useState<string | null>(null);

  const handleCustomLinkClick = (linkName: string) => {
    setActiveCustomLink((prevActive) =>
      linkName === prevActive ? null : linkName
    );
    setIsDropdownOpen((prevOpen) =>
      linkName === activeCustomLink ? !prevOpen : true
    );
  };

  return (
    <nav className="rounded-menu bg-menu-background from-menu-from_background to-menu-to_background bg-gradient-to-r p-1 text-center">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          {/* Logo Section */}
          <LogoSection logo={logo} altText={altText} />

          {/* Desktop Menu */}
          <DesktopMenuSection
            links={links}
            activeCustomLink={activeCustomLink}
            isDropdownOpen={isDropdownOpen}
            handleCustomLinkClick={handleCustomLinkClick}
            DropdownMenuComponent={DropdownMenu}
          />

          {/* Mobile Menu Button */}
          <MobileMenuButtonSection isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} links={links} />
    </nav>
  );
};

export default Navbar;
