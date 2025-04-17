import { Fragment, useState } from 'react';
import {
  MegaMenuMobileMenuProps,
  MegaMenuDesktopMenuProps,
  MegaMenuNavBarComponentProps,
  MegaMenuNavBarProps as Navigation,
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
          className="fixed inset-0 bg-atom-menu-dark"
          onClick={() => setOpen(false)}
        />
        <div className="fixed inset-0 z-40 flex">
          <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-atom-menu-background bg-gradient-to-r from-atom-menu-from_background to-atom-menu-to_background pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-atom-menu-dark"
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
              <div className="border-b border-atom-menu-dark">
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
                            ? 'border-atom-menu-dark/90 text-atom-menu-dark'
                            : 'border-transparent text-atom-menu-dark/70'
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
                                    className="aspect-square w-full rounded-lg bg-atom-menu-light object-cover group-hover:opacity-75"
                                  />
                                  <CustomLink
                                    href={item.href}
                                    underlineHover={false}
                                    className="mt-6 block text-atom-menu-dark/90 hover:text-atom-menu-dark/50"
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
                                  className="font-bold text-atom-menu-dark"
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
                                      className="-m-2 block p-2 text-atom-menu-dark/90 hover:text-atom-menu-dark/50"
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
            <div className="space-y-6 border-t border-atom-menu-dark px-4 py-6">
              {navigation.pages &&
                navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <CustomLink
                      href={page.href}
                      underlineHover={false}
                      className="-m-2 block p-2 text-atom-menu-dark/90 hover:text-atom-menu-dark/50"
                    >
                      {page.name}
                    </CustomLink>
                  </div>
                ))}
            </div>
            <div className="space-y-6 border-t border-atom-menu-dark px-4 py-6">
              {signInText && (
                <div className="flow-root">
                  <CustomLink
                    href="#"
                    underlineHover={false}
                    className="-m-2 block p-2 text-atom-menu-dark/90 hover:text-atom-menu-dark/50"
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
                    className="-m-2 block p-2 text-atom-menu-dark/90 hover:text-atom-menu-dark/50"
                  >
                    {createAccountText}
                  </CustomLink>
                </div>
              )}
            </div>
            <div className="border-t border-atom-menu-dark px-4 py-6">
              <CustomLink
                href="#"
                underlineHover={false}
                className="-m-2 flex items-center p-2 text-atom-menu-dark/90 hover:text-atom-menu-dark/50"
              >
                <UDSImage
                  alt=""
                  src="/images/avatar.jpg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base text-atom-menu-dark/90 hover:text-atom-menu-dark/50">
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
            <div key={category.name} className="relative flex">
              <div className="relative flex">
                <CustomLink
                  onClick={() =>
                    setActiveTab(
                      activeTab === category.name ? '' : category.name
                    )
                  }
                  className={`relative z-10 -mb-px flex items-center border-b-2 ${
                    activeTab === category.name
                      ? 'border-atom-menu-dark/90 text-atom-menu-dark'
                      : 'border-transparent text-atom-menu-dark/70'
                  } pt-px transition-colors duration-200 ease-out hover:border-atom-menu-dark/80 hover:text-atom-menu-dark`}
                  href={'#'}
                  underlineHover={false}
                >
                  {category.name}
                </CustomLink>
              </div>
              {activeTab === category.name && (
                <div className="absolute inset-x-0 top-full text-atom-menu-dark z-20">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 top-1/2 bg-atom-menu-background bg-gradient-to-r from-atom-menu-from_background to-atom-menu-to_background shadow-sm"
                  />
                  <div className="relative bg-atom-menu-background bg-gradient-to-r from-atom-menu-from_background to-atom-menu-to_background">
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
                                  className="aspect-square w-full rounded-lg bg-atom-menu-light object-cover group-hover:opacity-75"
                                />
                                <CustomLink
                                  href={item.href}
                                  underlineHover={false}
                                  className="mt-6 block text-atom-menu-dark/90 hover:text-atom-menu-dark/50"
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
                        <div
                          className={`row-start-1 ${category.featured ? 'col-start-1' : ''} grid grid-cols-3 gap-x-8 gap-y-10`}
                        >
                          {category.sections.map((section) => (
                            <div key={section.name}>
                              {section.name && (
                                <p
                                  id={`${section.name}-heading`}
                                  className="font-bold text-atom-menu-dark"
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
                                      className="text-atom-menu-dark/90 hover:text-atom-menu-dark/50"
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
              className="flex items-center text-atom-menu-dark/90 hover:text-atom-menu-dark/50"
            >
              {page.name}
            </CustomLink>
          ))}
      </div>
    </div>
  );
}

const TopBarSection: React.FC<{
  signInText?: string;
  createAccountText?: string;
  changeCurrencyText?: string;
  currency?: string;
}> = ({
  signInText,
  createAccountText,
  changeCurrencyText,
  currency,
}) => (
  <div className="flex h-10 items-center justify-end px-4 sm:px-6 lg:px-8">
    {signInText && (
      <div className="flex">
        <div className="flex">
          <div className="flex">
            <CustomLink
              href="#"
              className="text-sm text-atom-menu-dark/90 hover:text-atom-menu-dark"
              underlineHover={false}
            >
              {signInText}
            </CustomLink>
          </div>
        </div>
        <span aria-hidden="true" className="mx-4 h-6 w-px bg-atom-menu-dark/20" />
        {createAccountText && (
          <div className="flex">
            <div className="flex">
              <CustomLink
                href="#"
                className="text-sm text-atom-menu-dark/90 hover:text-atom-menu-dark"
                underlineHover={false}
              >
                {createAccountText}
              </CustomLink>
            </div>
          </div>
        )}
        <span aria-hidden="true" className="mx-4 h-6 w-px bg-atom-menu-dark/20" />
      </div>
    )}

    {currency && (
      <div className="flex">
        <div className="flex">
          <CustomLink
            href="#"
            className="flex items-center text-atom-menu-dark/90 hover:text-atom-menu-dark"
            underlineHover={false}
          >
            <UDSImage
              alt=""
              src="/images/avatar.jpg"
              className="block h-auto w-5 shrink-0"
            />
            <span className="ml-3 block text-sm">{currency}</span>
            <span className="sr-only">{changeCurrencyText}</span>
          </CustomLink>
        </div>
      </div>
    )}
  </div>
);

const MainNavBarSection: React.FC<{
  logoSrc: string;
  logoAlt: string;
  navigation: Navigation;
  searchBox?: boolean;
  setOpen: (open: boolean) => void;
  DesktopMenuComponent: React.FC<MegaMenuDesktopMenuProps>;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  shopNowText?: string;
}> = ({
  logoSrc,
  logoAlt,
  navigation,
  searchBox,
  setOpen,
  DesktopMenuComponent,
  activeTab,
  setActiveTab,
  shopNowText,
}) => (
  <div className="border-b border-atom-menu-dark">
    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center">
        <Button
          type="button"
          variant='icon'
          className="relative rounded-md p-2 lg:hidden"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <Icon
            aria-hidden="true"
            className="size-6 text-atom-menu-dark hover:text-atom-menu-dark/50"
            name={'bars3'}
            variant={'outline'}
          />
        </Button>

        <div className="ml-4 flex lg:ml-0">
          <CustomLink href="#">
            <span className="sr-only">Your Company</span>
            <UDSImage
              alt={logoAlt}
              src={logoSrc}
              className="h-8 w-auto"
            />
          </CustomLink>
        </div>

        <DesktopMenuComponent
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          navigation={navigation}
          shopNowText={shopNowText}
        />

        <div className="ml-auto flex items-center">
          {searchBox && (
            <div className="flex lg:ml-6">
              <CustomLink
                href="#"
                className="p-2 text-atom-menu-dark/90 hover:text-atom-menu-dark/50"
              >
                <span className="sr-only">Search</span>
                <Icon
                  aria-hidden="true"
                  className="size-6"
                  name={'search'}
                  variant={'outline'}
                />
              </CustomLink>
            </div>
          )}

          <div className="ml-4 flow-root lg:ml-6">
            <CustomLink href="#" className="group -m-2 flex items-center p-2">
              <Icon
                aria-hidden="true"
                name={'shoppingCart'}
                variant='outline'
                className="size-6 shrink-0 text-atom-menu-dark group-hover:text-atom-menu-dark/50"
              />
              <span className="ml-2 text-sm text-atom-menu-dark group-hover:text-atom-menu-dark/50">
                0
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </CustomLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

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
  closeMenuText = 'Close menu',
  shopNowText = 'Shop now',
}: MegaMenuNavBarComponentProps) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  return (
    <div className="relative z-10">
      <div className="rounded-menu bg-menu-background bg-gradient-to-r from-menu-from_background to-menu-to_background">
        <MobileMenu
          open={open}
          setOpen={setOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          navigation={navigation}
          closeMenuText={closeMenuText}
          shopNowText={shopNowText}
          signInText={signInText ?? ''}
          createAccountText={createAccountText ?? ''}
          changeCurrencyText={changeCurrencyText ?? ''}
          currency={currency ?? ''}
        />

        <header className="relative">
          {freeDeliveryText && (
            <p className="flex h-10 items-center justify-center bg-atom-menu-accent-dark px-4 text-sm text-atom-menu-accent-light sm:px-6 lg:px-8">
              {freeDeliveryText}
            </p>
          )}

          <TopBarSection
            signInText={signInText}
            createAccountText={createAccountText}
            changeCurrencyText={changeCurrencyText}
            currency={currency}
          />

          <MainNavBarSection
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            navigation={navigation}
            searchBox={searchBox}
            setOpen={setOpen}
            DesktopMenuComponent={DesktopMenu}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            shopNowText={shopNowText}
          />
        </header>
      </div>
    </div>
  );
}
