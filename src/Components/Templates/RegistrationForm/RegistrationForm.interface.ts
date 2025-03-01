import { ReactNode } from 'react';
import { FormHandlerProps } from '../../../Components/Organisms/FormHandler/FormHandler.interface';

export interface RegistrationFormProps {
  pageTitle?: ReactNode;
  pageSubTitle?: ReactNode;
  formHandlerData: FormHandlerProps;
}
