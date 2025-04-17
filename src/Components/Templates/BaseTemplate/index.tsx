import React from 'react';
import { BaseTemplateProps } from './BaseTemplate.interface';

export const BaseTemplate: React.FC<BaseTemplateProps> = ({
  header,
  footer,
  children,
  className = '',
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      {header}
      <main className={`flex-grow ${className}`}>{children}</main>
      {footer}
    </div>
  );
};

export default BaseTemplate;
