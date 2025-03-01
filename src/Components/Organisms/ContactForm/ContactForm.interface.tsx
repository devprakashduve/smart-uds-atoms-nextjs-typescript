import { ContactInformationProps } from '../ContactInformation/types';
import { TextAreaProps } from '../../../Components/Atoms/InputGroup/TextArea/TextAreaProps.interface';
import { FormHandlerProps } from '../FormHandler/FormHandler.interface';

export interface ContactFormProps {
  formHandlerData: FormHandlerProps;
  contactInfo?: ContactInformationProps;
}
