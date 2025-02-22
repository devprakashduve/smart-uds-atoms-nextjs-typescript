import { useState } from 'react';

import { NavBarLogoLinksProps } from './NavBarLogoLinks.interface';
import Button from '@/Components/Atoms/Button';
import Icon from '@/Components/Atoms/Icon';
import Input from '@/Components/Atoms/InputGroup/Input';
import CustomLink from '@/Components/Atoms/CustomLink';
import UDSImage from '@/Components/Atoms/Image';

const dummyData = [
  { id: 1, name: 'Home', href: '/xyz' },
  { id: 2, name: 'About', href: '/abc' },
  { id: 3, name: 'Services', href: '' },
  { id: 4, name: 'Contact', href: '' },
  { id: 5, name: 'Blog', href: '' },
];

const NavBarLogoLinks: React.FC<NavBarLogoLinksProps> = ({
  logo,
  links,
  backgroundColor,
  searchPlaceHolder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const filteredData = dummyData.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <nav
      className={`w-full ${backgroundColor || 'bg-menu-background from-menu-from_background to-menu-to_background bg-gradient-to-r'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <CustomLink href="/">
            <UDSImage src={logo} alt="Logo" className="h-8 w-auto" />
          </CustomLink>

          {/* Search Bar */}
          <div className="w-1/3 shadow-md">
            <Input
              placeholder={searchPlaceHolder || ''}
              className="bg-menu-hover text-menu-dark w-full"
              value={searchValue}
              name="search"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchValue(e.target.value)
              }
              type={'text'}
              showIcon={true}
              customIconName="search"
            />
            {searchValue && (
              <div className="bg-menu-hover text-menu-dark absolute w-2/6 shadow-lg">
                {filteredData.map((item) => (
                  <CustomLink target="_blank" key={item.id} href={item.href}>
                    <div className="hover:bg-menu-light p-3"> {item.name}</div>
                  </CustomLink>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 md:flex">
            {links.map((link) => (
              <CustomLink
                key={link.name}
                href={link.href}
                className="text-menu-dark hover:text-menu-hover"
              >
                {link.name}
              </CustomLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <Icon name="close" variant={'outline'} />
              ) : (
                <Icon name="bars3" variant={'outline'} />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-menu-background from-menu-from_background to-menu-to_background text-menu-dark bg-gradient-to-r p-4">
          {links.map((link) => (
            <CustomLink
              key={link.name}
              href={link.href}
              className="text-menu-dark hover:text-menu-hover block py-2"
            >
              {link.name}
            </CustomLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBarLogoLinks;
