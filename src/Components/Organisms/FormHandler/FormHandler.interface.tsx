import { CheckboxProps } from '../../Atoms/InputGroup/Checkbox/CheckboxProps.interface';
import { InputProps } from '../../Atoms/InputGroup/Input/InputProps.interface';
import { TextAreaProps } from '../../Atoms/InputGroup/TextArea/TextAreaProps.interface';

export interface FormHandlerProps {
  inputFields?: InputProps[];
  textAreaFields?: TextAreaProps[];
  checkboxFields?: CheckboxProps[];
  fieldOrder: Array<'input' | 'textarea' | 'checkbox'>;
  btnText: string;
  onSubmit: (data: object) => void;
  validationOnFocus?: boolean;
}
