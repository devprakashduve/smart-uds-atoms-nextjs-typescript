import { BaseTemplateProps } from '../BaseTemplate/BaseTemplate.interface';

export interface PageTemplateProps extends BaseTemplateProps {
  pageTitle?: string;
  pageSubTitle?: string;
  sectionClassName?: string;
  // Add props needed by Section
  sectionBorder?: boolean;
  sectionTextAlign?: 'left' | 'right' | 'center';
} 