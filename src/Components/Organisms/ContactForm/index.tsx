import { ContactFormProps } from './ContactForm.interface';
import ContactInformation from '../ContactInformation';
import FormHandler from '../FormHandler';

export default function ContactForm({
  formHandlerData,
  contactInfo,
}: ContactFormProps) {
  return (
    <div>
      {contactInfo && <ContactInformation {...contactInfo} />}
      <FormHandler {...formHandlerData} />
    </div>
  );
}
