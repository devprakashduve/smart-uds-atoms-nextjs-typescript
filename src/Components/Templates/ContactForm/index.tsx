import { ContactFormProps } from './ContactForm.interface';
import ContactInformation from '../../Organisms/ContactInformation';
import FormHandler from '../../Organisms/FormHandler';

export default function ContactForm({
  formHandlerData,
  contactInfo,
  pageTitle,
  pageSubTitle,
}: ContactFormProps) {
  return (
    <div>
      <div>
        <h1>{pageTitle}</h1>
        <p className="flex justify-center text-gray-400">{pageSubTitle}</p>
      </div>
      {contactInfo && <ContactInformation {...contactInfo} />}
      <FormHandler {...formHandlerData} />
    </div>
  );
}
