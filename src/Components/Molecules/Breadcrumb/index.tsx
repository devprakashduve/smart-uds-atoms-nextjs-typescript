import React from 'react';
import { BreadcrumbProps } from './BreadcrumbProps.interface';
import './Breadcrumb.css';
import CustomLink from '@/Components/Atoms/CustomLink';

const Breadcrumbs: React.FC<BreadcrumbProps> = ({
  items,
  separator = '>',
  className = '',
}) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`breadcrumbs-nav ${className}`}>
      <ol className="flex space-x-1">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item flex items-center">
            {item.href ? (
              <CustomLink href={item.href} target="_self" text={item.label} />
            ) : (
              <CustomLink href={'#'} target="_self" text={item.label} />
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-letter">{separator}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
