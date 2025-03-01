import { ReactNode } from 'react';
import { FormHandlerProps } from '../../../Components/Organisms/FormHandler/FormHandler.interface';

export interface LoginFormProps {
  pageTitle?: ReactNode;
  pageSubTitle?: ReactNode;
  formHandlerData: FormHandlerProps;
}
