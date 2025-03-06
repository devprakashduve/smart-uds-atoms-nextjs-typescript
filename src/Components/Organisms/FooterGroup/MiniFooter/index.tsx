import React, { FC } from 'react';
import { MiniFooterProps } from './MiniFooterProps.interface';
import CustomLink from '@/Components/Atoms/CustomLink';

const MiniFooter: FC<MiniFooterProps> = ({ copyrightText, links }) => {
  return (
    <footer className="bg-gradient-to-r from-footer-from_color via-footer-via_color to-footer-to_color p-7 text-footer-text">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 text-sm md:mb-0">
          <p className="text-footer-text">{copyrightText}</p>
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
          {links.map((link, index) => (
            <CustomLink
              key={index}
              href={link.url}
              className="text-sm text-footer-link hover:text-footer-link/60"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </CustomLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default MiniFooter;
