import { ReactNode } from 'react';
import { FormHandlerProps } from '../../../Components/Organisms/FormHandler/FormHandler.interface';

export interface RegistrationFormProps {
  pageTitle?: ReactNode;
  pageSubTitle?: ReactNode;
  formHandlerData: FormHandlerProps;
  /** Optional header slot (e.g. navbar) */
  header?: ReactNode;
  /** Optional footer slot */
  footer?: ReactNode;
  /** Override the background/wrapper className */
  className?: string;
}
