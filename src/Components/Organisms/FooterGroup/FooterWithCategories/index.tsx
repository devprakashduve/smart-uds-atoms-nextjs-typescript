import React from 'react';
import Button from '../../../../Components/Atoms/Button';
import CustomLink from '../../../../Components/Atoms/CustomLink';
import Icon from '../../../../Components/Atoms/Icon';
import Input from '../../../../Components/Atoms/InputGroup/Input';
import List from '../../../Molecules/ListGroup/List';

interface FooterWithCategoriesProps {
  categories: {
    title: string;
    links: { name: string; href: string }[];
  }[];
  subscribePlaceholder: string;
  subscribeButtonText: string;
  subscribeMessage: string;
  socialLinks: { name: string; href: string }[];
}

const FooterWithCategories: React.FC<FooterWithCategoriesProps> = ({
  categories,
  subscribePlaceholder,
  subscribeButtonText,
  subscribeMessage,
  socialLinks,
}) => {
  return (
    <footer className="bg-gradient-to-r from-footer-from_color via-footer-via_color to-footer-to_color py-16 text-footer-text">
      <div className="container mx-auto px-5 py-24">
        <div className="-mx-4 -mb-10 flex flex-wrap text-center md:text-left">
          {categories.map((category, index) => (
            <List
              key={index}
              title={category.title}
              links={category.links}
              textColor="text-footer-text"
            />
          ))}
        </div>
      </div>

      <div className="border-t border-footer-from_color">
        <div className="container mx-auto flex flex-wrap items-center px-5 py-8">
          <div className="flex flex-wrap justify-center md:justify-start">
            <Input
              className="mr-1 w-80"
              placeholder={subscribePlaceholder}
              type="email"
              value=""
              name="Subscribe"
              showIcon
            />
            <Button>{subscribeButtonText}</Button>
            <p className="mt-2 text-center text-sm text-footer-text sm:text-left md:ml-6 md:mt-0">
              {subscribeMessage}
            </p>
          </div>

          <span className="mt-6 inline-flex w-full justify-center md:w-auto md:justify-start lg:ml-auto lg:mt-0">
            {socialLinks.map((social, index) => (
              <CustomLink
                key={index}
                href={social.href}
                className="ml-3 rounded-full p-2 text-footer-text ring-1 ring-footer-text/90 ring-offset-1 hover:text-footer-text/60"
              >
                <Icon
                  name={social.name}
                  variant="outline"
                  className="text-footer-text"
                />
              </CustomLink>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithCategories;
