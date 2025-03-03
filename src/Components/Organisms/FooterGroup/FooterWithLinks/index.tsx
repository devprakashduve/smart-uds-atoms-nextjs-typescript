import { Key } from 'react';
import { FooterWithLinksProps } from './FooterWithLinks.interface';
import Icon from '@/Components/Atoms/Icon';
import CustomLink from '@/Components/Atoms/CustomLink';

export default function FooterWithLinks({
  title,
  description,
  links,
  SocialMediaLinks,
}: FooterWithLinksProps) {
  const half = Math.ceil(links.length / 2);
  const firstHalf = links.slice(0, half);
  const secondHalf = links.slice(half);

  return (
    <div className="from-footer-from_color via-footer-via_color to-footer-to_color text-footer-text relative isolate overflow-hidden bg-gradient-to-r py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col justify-between lg:max-w-none lg:flex-row">
          <div className="mb-8 max-w-xl lg:mb-0 lg:max-w-lg">
            <h2 className="text-footer-text">{title}</h2>
            <p className="text-footer-text mt-4 text-lg">{description}</p>
            <div className="mt-6 flex space-x-4">
              {SocialMediaLinks?.map((social, index) => (
                <CustomLink
                  key={index}
                  href={social.href}
                  target={social.target || '_self'}
                  className="text-footer-text hover:text-footer-text/60 ring-footer-text/90 rounded-full p-2 ring-2 ring-offset-2"
                >
                  <Icon name={social.iconName} variant={'outline'} />
                </CustomLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-8 lg:space-y-0">
            <ul className="space-y-4">
              {firstHalf.map(
                (
                  link: {
                    href: string | undefined;
                    text: string | undefined;
                  },
                  index: Key | null | undefined
                ) => (
                  <li key={index}>
                    <a href={link.href} className="text-footer-text underline">
                      {link.text}
                    </a>
                  </li>
                )
              )}
            </ul>
            <ul className="space-y-4">
              {secondHalf.map(
                (
                  link: {
                    href: string | undefined;
                    text: string | undefined;
                  },
                  index: Key | null | undefined
                ) => (
                  <li key={index}>
                    <a href={link.href} className="text-footer-text underline">
                      {link.text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
