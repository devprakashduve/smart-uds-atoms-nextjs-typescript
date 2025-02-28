import React from 'react';
import Input from '../../../Components/Atoms/InputGroup/Input';
import { InputProps } from '../../../Components/Atoms/InputGroup/Input/InputProps.interface';
import TextArea from '../../../Components/Atoms/InputGroup/TextArea';
import { TextAreaProps } from '../../../Components/Atoms/InputGroup/TextArea/TextAreaProps.interface';
import { FormHandlerProps } from './FormHandler.interface';
import Checkbox from '../../../Components/Atoms/InputGroup/Checkbox';
import { CheckboxProps } from '../../../Components/Atoms/InputGroup/Checkbox/CheckboxProps.interface';
import Button from '../../../Components/Atoms/Button';

const FormHandler: React.FC<FormHandlerProps> = ({
  inputFields = [],
  textAreaFields = [],
  checkboxFields = [],
  fieldOrder,
  btnText,
  onSubmit,
  validationOnFocus,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  const renderInputFields = () =>
    inputFields.map((field: InputProps) => (
      <Input
        key={field.id || field.name}
        id={field.id}
        name={field.name}
        label={field.label}
        autoComplete={field.autoComplete}
        value={field.value}
        type={field.type}
        showIcon={field.showIcon}
        placeholder={field.placeholder}
        isRequired={field.isRequired}
        requiredErrorMessage={field.requiredErrorMessage}
        validationOnFocus={validationOnFocus}
        onChange={field.onChange}
        maxLength={field.type === 'phone' ? 17 : 50}
      />
    ));

  const renderTextAreaFields = () =>
    textAreaFields.map((field: TextAreaProps) => (
      <TextArea
        key={field.id || field.name}
        charCountWarningThreshold={field.charCountWarningThreshold || 10}
        maxLength={field.maxLength || 100}
        onChange={field.onChange}
        placeholder={field.placeholder}
        showCharCount={field.showCharCount || true}
        value={field.value || ''}
        label={field.label}
        isRequired={field.isRequired || true}
        requiredErrorMessage={field.requiredErrorMessage}
        validationOnFocus={validationOnFocus}
        name={field.name}
      />
    ));

  const renderCheckboxFields = () =>
    checkboxFields.map((field: CheckboxProps) => (
      <Checkbox
        key={field.name}
        name={field.name}
        label={field.label}
        checked={field.checked}
        toggleChecked={field.toggleChecked}
        size={field.size}
        title={field.title}
        disabled={field.disabled}
        indeterminate={field.indeterminate}
      />
    ));

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {fieldOrder.map((fieldType) => {
        switch (fieldType) {
          case 'input':
            return renderInputFields();
          case 'textarea':
            return renderTextAreaFields();
          case 'checkbox':
            return renderCheckboxFields();
          default:
            return null;
        }
      })}
      <Button type="submit">{btnText}</Button>
    </form>
  );
};

export default FormHandler;
