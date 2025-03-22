import { Fragment, useState } from 'react';
import {
  MegaMenuMobileMenuProps,
  MegaMenuDesktopMenuProps,
  MegaMenuNavBarComponentProps,
} from './MegaMenuNavBar.interface';
import CustomLink from '@/Components/Atoms/CustomLink';
import Button from '@/Components/Atoms/Button';
import Icon from '@/Components/Atoms/Icon';
import UDSImage from '@/Components/Atoms/UDSImage';

function MobileMenu({
  open,
  setOpen,
  activeTab,
  setActiveTab,
  navigation,
  closeMenuText,
  shopNowText,
  signInText,
  createAccountText,
  changeCurrencyText,
  currency,
}: MegaMenuMobileMenuProps) {
  return (
    open && (
      <div className="fixed inset-0 z-40 w-full lg:hidden">
        <div
          className="bg-menu-dark fixed inset-0"
          onClick={() => setOpen(false)}
        />
        <div className="fixed inset-0 z-40 flex">
          <div className="bg-menu-background from-menu-from_background to-menu-to_background relative flex w-full max-w-xs flex-col overflow-y-auto bg-gradient-to-r pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-menu-dark relative -m-2 inline-flex items-center justify-center rounded-md p-2"
              >
                <span className="sr-only">{closeMenuText}</span>
                <Icon
                  aria-hidden="true"
                  className="size-6"
                  name={'close'}
                  variant={'outline'}
                />
              </button>
            </div>
            <div className="mt-2">
              <div className="border-menu-dark border-b">
                <div className="-mb-px flex space-x-8 px-4">
                  {navigation.categories &&
                    navigation.categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() =>
                          setActiveTab(
                            activeTab === category.name ? '' : category.name
                          )
                        }
                        className={`${
                          activeTab === category.name
                            ? 'border-menu-dark/90 text-menu-dark'
                            : 'text-menu-dark/70 border-transparent'
                        } flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base`}
                      >
                        {category.name}
                      </button>
                    ))}
                </div>
              </div>
              <div className="space-y-10 px-4 pb-8 pt-10">
                {navigation.categories &&
                  navigation.categories.map(
                    (category) =>
                      activeTab === category.name && (
                        <Fragment key={category.name}>
                          <div className="grid grid-cols-2 gap-x-4">
                            {category.featured &&
                              category.featured.map((item) => (
                                <div key={item.name} className="group relative">
                                  <UDSImage
                                    alt={item.imageAlt}
                                    src={item.imageSrc}
                                    className="bg-menu-light aspect-square w-full rounded-lg object-cover group-hover:opacity-75"
                                  />
                                  <CustomLink
                                    href={item.href}
                                    underlineHover={false}
                                    className="text-menu-dark/90 hover:text-menu-dark/50 mt-6 block"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0 z-10"
                                    />
                                    {item.name}
                                  </CustomLink>
                                  <p aria-hidden="true" className="mt-1">
                                    {shopNowText}
                                  </p>
                                </div>
                              ))}
                          </div>
                          {category.sections.map((section) => (
                            <div key={section.name}>
                              {section.name && (
                                <p
                                  id={`${category.id}-${section.id}-heading-mobile`}
                                  className="text-menu-dark font-bold"
                                >
                                  {section.name}
                                </p>
                              )}
                              <ul
                                role="list"
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className="mt-6 flex flex-col space-y-6"
                              >
                                {section.items.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <CustomLink
                                      href={item.href}
                                      underlineHover={false}
                                      className="text-menu-dark/90 hover:text-menu-dark/50 -m-2 block p-2"
                                    >
                                      {item.name}
                                    </CustomLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </Fragment>
                      )
                  )}
              </div>
            </div>
            <div className="border-menu-dark space-y-6 border-t px-4 py-6">
              {navigation.pages &&
                navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <CustomLink
                      href={page.href}
                      underlineHover={false}
                      className="text-menu-dark/90 hover:text-menu-dark/50 -m-2 block p-2"
                    >
                      {page.name}
                    </CustomLink>
                  </div>
                ))}
            </div>
            <div className="border-menu-dark space-y-6 border-t px-4 py-6">
              {signInText && (
                <div className="flow-root">
                  <CustomLink
                    href="#"
                    underlineHover={false}
                    className="text-menu-dark/90 hover:text-menu-dark/50 -m-2 block p-2"
                  >
                    {signInText}
                  </CustomLink>
                </div>
              )}

              {createAccountText && (
                <div className="flow-root">
                  <CustomLink
                    href="#"
                    underlineHover={false}
                    className="text-menu-dark/90 hover:text-menu-dark/50 -m-2 block p-2"
                  >
                    {createAccountText}
                  </CustomLink>
                </div>
              )}
            </div>
            <div className="border-menu-dark border-t px-4 py-6">
              <CustomLink
                href="#"
                underlineHover={false}
                className="text-menu-dark/90 hover:text-menu-dark/50 -m-2 flex items-center p-2"
              >
                <UDSImage
                  alt=""
                  src="/images/avatar.jpg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="text-menu-dark/90 hover:text-menu-dark/50 ml-3 block text-base">
                  {currency}
                </span>
                <span className="sr-only">{changeCurrencyText}</span>
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

function DesktopMenu({
  activeTab,
  setActiveTab,
  navigation,
  shopNowText,
}: MegaMenuDesktopMenuProps) {
  return (
    <div className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="flex h-full space-x-8">
        {navigation.categories &&
          navigation.categories.map((category) => (
            <div key={category.name} className="flex">
              <div className="relative flex">
                <CustomLink
                  onClick={() =>
                    setActiveTab(
                      activeTab === category.name ? '' : category.name
                    )
                  }
                  className={`relative z-10 -mb-px flex items-center border-b-2 ${
                    activeTab === category.name
                      ? 'border-menu-dark/90 text-menu-dark'
                      : 'text-menu-dark/70 border-transparent'
                  } hover:border-menu-dark/80 hover:text-menu-dark pt-px transition-colors duration-200 ease-out`}
                  href={'#'}
                  underlineHover={false}
                >
                  {category.name}
                </CustomLink>
              </div>
              {activeTab === category.name && (
                <div className="text-menu-dark absolute inset-x-0 top-full">
                  <div
                    aria-hidden="true"
                    className="bg-menu-background from-menu-from_background to-menu-to_background absolute inset-0 top-1/2 bg-gradient-to-r shadow-sm"
                  />
                  <div className="bg-menu-background from-menu-from_background to-menu-to_background relative bg-gradient-to-r">
                    <div className="mx-auto max-w-7xl px-8">
                      <div
                        className={`${category.featured ? 'grid grid-cols-2 gap-x-8 gap-y-10' : ''} py-16`}
                      >
                        {category.featured && (
                          <div className="col-start-2 grid grid-cols-3 gap-x-8">
                            {category.featured.map((item) => (
                              <div
                                key={item.name}
                                className="sm: group relative text-base"
                              >
                                <UDSImage
                                  alt={item.imageAlt}
                                  src={item.imageSrc}
                                  className="bg-menu-light aspect-square w-full rounded-lg object-cover group-hover:opacity-75"
                                />
                                <CustomLink
                                  href={item.href}
                                  underlineHover={false}
                                  className="text-menu-dark/90 hover:text-menu-dark/50 mt-6 block"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="absolute inset-0 z-10"
                                  />
                                  {item.name}
                                </CustomLink>
                                <p aria-hidden="true" className="mt-1">
                                  {shopNowText}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10">
                          {category.sections.map((section) => (
                            <div key={section.name}>
                              {section.name && (
                                <p
                                  id={`${section.name}-heading`}
                                  className="text-menu-dark font-bold"
                                >
                                  {section.name}
                                </p>
                              )}
                              <ul
                                role="list"
                                aria-labelledby={`${section.name}-heading`}
                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              >
                                {section.items.map((item) => (
                                  <li key={item.name} className="flex">
                                    <CustomLink
                                      href={item.href}
                                      className="text-menu-dark/90 hover:text-menu-dark/50"
                                      target="_blank"
                                      underlineHover={false}
                                    >
                                      {item.name}
                                    </CustomLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        {navigation.pages &&
          navigation.pages.map((page) => (
            <CustomLink
              key={page.name}
              href={page.href}
              underlineHover={false}
              className="text-menu-dark/90 hover:text-menu-dark/50 flex items-center"
            >
              {page.name}
            </CustomLink>
          ))}
      </div>
    </div>
  );
}

export default function MegaMenuNavBar({
  navigation,
  freeDeliveryText,
  signInText,
  createAccountText,
  changeCurrencyText,
  currency,
  searchBox,
  logoSrc,
  logoAlt,
}: MegaMenuNavBarComponentProps) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  return (
    <div>
      <MobileMenu
        open={open}
        setOpen={setOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navigation={navigation}
        closeMenuText="Close menu"
        shopNowText=""
        signInText={signInText || ''}
        createAccountText={createAccountText || ''}
        changeCurrencyText={changeCurrencyText || ''}
        currency={currency || ''}
      />
      <header className="bg-menu-background from-menu-from_background to-menu-to_background relative bg-gradient-to-r">
        {freeDeliveryText && (
          <p className="bg-menu-dark/90 text-menu-light/80 flex h-10 items-center justify-center p-2 sm:py-6 lg:px-8">
            {freeDeliveryText}
          </p>
        )}
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="">
            <div className="flex h-20 items-center">
              <CustomLink
                onClick={() => setOpen(true)}
                underlineHover={false}
                className="bg-menu-light text-menu-dark relative rounded-md p-2 lg:hidden"
                href={'#'}
              >
                <span className="sr-only">Menu</span>
                <Icon
                  aria-hidden="true"
                  className="size-6"
                  name={'bars3'}
                  variant={'outline'}
                />
              </CustomLink>
              <div className="ml-4 flex lg:ml-0">
                <Button variant="icon" href="/">
                  <span className="sr-only">{logoAlt}</span>
                  <UDSImage
                    alt={logoAlt}
                    src={logoSrc}
                    className="h-8 w-auto"
                  />
                </Button>
              </div>
              <DesktopMenu
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                navigation={navigation}
                shopNowText=""
              />
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {signInText && (
                    <>
                      <CustomLink
                        href="#"
                        underlineHover={false}
                        className="text-menu-dark/90 hover:text-menu-dark/50"
                      >
                        {signInText}
                      </CustomLink>
                      <span
                        aria-hidden="true"
                        className="bg-menu-dark h-6 w-px"
                      />
                    </>
                  )}
                  {createAccountText && (
                    <CustomLink
                      href="#"
                      underlineHover={false}
                      className="text-menu-dark/90 hover:text-menu-dark/50"
                    >
                      {createAccountText}
                    </CustomLink>
                  )}
                </div>

                {searchBox && (
                  <div className="flex lg:ml-6">
                    <a
                      href="#"
                      className="text-menu-dark/90 hover:text-menu-dark/50 p-2"
                    >
                      <span className="sr-only">Search</span>
                      <Icon
                        aria-hidden="true"
                        className="size-6"
                        name={'search'}
                        variant={'outline'}
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
