import { ContactInformationProps } from '../ContactInformation/types';
import { FormHandlerProps } from '../FormHandler/FormHandler.interface';

export interface ContactFormProps {
  formHandlerData: FormHandlerProps;
  contactInfo?: ContactInformationProps;
}
