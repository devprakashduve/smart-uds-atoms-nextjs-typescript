import { ContactInformationProps } from '../../Organisms/ContactInformation/types';
import { FormHandlerProps } from '../../Organisms/FormHandler/FormHandler.interface';
import { PageTemplateProps } from '../PageTemplate/PageTemplate.interface';

// Use Omit to inherit from PageTemplateProps but exclude children
export interface ContactFormProps extends Omit<PageTemplateProps, 'children'> {
  formHandlerData: FormHandlerProps;
  contactInfo?: ContactInformationProps;
}
