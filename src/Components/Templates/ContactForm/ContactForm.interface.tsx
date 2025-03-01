import { ContactInformationProps } from '../../Organisms/ContactInformation/types';
import { FormHandlerProps } from '../../Organisms/FormHandler/FormHandler.interface';

export interface ContactFormProps {
  pageTitle?: string;
  pageSubTitle?: string;
  formHandlerData: FormHandlerProps;
  contactInfo?: ContactInformationProps;
}
