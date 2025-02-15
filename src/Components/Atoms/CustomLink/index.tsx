import React from 'react';
import { CustomLinkProps } from './CustomLink.interface';
import './CustomLink.css';
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
}) => {
  const containerClasses = classNames(className);
  return (
    <Link
      onClick={onClick}
      href={href}
      target={target}
      className={`link ${underline ? 'underline' : ''} ${underlineHover ? 'hover:underline' : ''} ${containerClasses}`}
    >
      {text || children}
    </Link>
  );
};

export default CustomLink;
