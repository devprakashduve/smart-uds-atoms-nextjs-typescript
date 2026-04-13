import { CheckboxProps } from '../../Atoms/InputGroup/Checkbox/CheckboxProps.interface';
import { InputProps } from '../../Atoms/InputGroup/Input/InputProps.interface';
import { TextAreaProps } from '../../Atoms/InputGroup/TextArea/TextAreaProps.interface';
import { SelectProps } from '../../../Components/Atoms/InputGroup/Select/SelectProps.interface';

export interface FormHandlerProps {
  inputFields?: InputProps[];
  textAreaFields?: TextAreaProps[];
  checkboxFields?: CheckboxProps[];
  selectFields?: SelectProps[];
  fieldOrder?: Array<'input' | 'textarea' | 'checkbox' | 'select'>;
  btnText: string;
  onSubmit: (data: object) => void;
  className?: string;
  /**
   * Optional validator called before onSubmit.
   * Return an object of { fieldName: errorMessage } to block submission.
   * Return empty object {} to allow submission.
   */
  onValidate?: (
    data: Record<string, FormDataEntryValue>
  ) => Record<string, string>;
  /** Show an error summary at the top of the form. Default: false */
  showErrorSummary?: boolean;
}
