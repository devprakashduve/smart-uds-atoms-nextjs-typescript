import { ContactFormProps } from '../../../Components/Organisms/ContactForm/ContactForm.interface';
import { ContactInformationProps } from '../../../Components/Organisms/ContactInformation/types';

export interface ContactTemplateProps {
  title: string;
  description: string;
  contactInfo?: ContactInformationProps;
  contactFormData: ContactFormProps;
}
