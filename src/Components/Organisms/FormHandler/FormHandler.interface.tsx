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
}
