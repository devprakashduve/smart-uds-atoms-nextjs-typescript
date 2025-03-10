import { FormHandlerProps } from '../FormHandler/FormHandler.interface';

export interface DisplayMapProps {
  mapSrc: string;
  title: string;
  description: string;
  formHandlerContent?: FormHandlerProps;
  footerText: string;
}
