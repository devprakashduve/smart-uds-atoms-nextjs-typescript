import React from 'react';
import { CustomLinkProps } from './CustomLink.interface';
import { classNames } from '@/Components/Utilities/componentsMethods';
import Link from 'next/link';

const CustomLink: React.FC<CustomLinkProps> = ({
  href = '/',
  text,
  target = '_self',
  children,
  underline = false,
  underlineHover = true,
  className,
  onClick,
  rel,
}) => {
  const containerClasses = classNames(className);
  return (
    <Link
      onClick={() => (onClick ? onClick : '')}
      href={href}
      rel={rel}
      target={target}
      className={`text-line-dark underline-offset-4 ${underline ? 'underline' : ''} ${underlineHover ? 'hover:underline' : ''} ${containerClasses}`}
    >
      {text || children}
    </Link>
  );
};

export default CustomLink;
