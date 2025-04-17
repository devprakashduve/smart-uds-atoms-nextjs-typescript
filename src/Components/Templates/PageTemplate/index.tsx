import React from 'react';
import BaseTemplate from '../BaseTemplate';
import { PageTemplateProps } from './PageTemplate.interface.jsx';
import Section from '../../Organisms/Section';

export const PageTemplate: React.FC<PageTemplateProps> = ({
  header,
  footer,
  pageTitle = '',
  pageSubTitle = '',
  children,
  className = '',
  sectionClassName = '',
  sectionBorder = false,
  sectionTextAlign = 'left',
}) => {
  return (
    <BaseTemplate header={header} footer={footer} className={className}>
      <Section
        className={sectionClassName}
        heading={pageTitle}
        subheading={pageSubTitle}
        border={sectionBorder}
        textAlign={sectionTextAlign}
        topHeading=''
      >
        {children}
      </Section>
    </BaseTemplate>
  );
};

export default PageTemplate; 