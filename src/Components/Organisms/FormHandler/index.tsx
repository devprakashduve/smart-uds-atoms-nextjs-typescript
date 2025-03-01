import React from 'react';
import Input from '../../../Components/Atoms/InputGroup/Input';
import { InputProps } from '../../../Components/Atoms/InputGroup/Input/InputProps.interface';
import TextArea from '../../../Components/Atoms/InputGroup/TextArea';
import { TextAreaProps } from '../../../Components/Atoms/InputGroup/TextArea/TextAreaProps.interface';
import { FormHandlerProps } from './FormHandler.interface';
import Checkbox from '../../../Components/Atoms/InputGroup/Checkbox';
import { CheckboxProps } from '../../../Components/Atoms/InputGroup/Checkbox/CheckboxProps.interface';
import Button from '../../../Components/Atoms/Button';
import Select from '../../../Components/Atoms/InputGroup/Select';
import { SelectProps } from '../../../Components/Atoms/InputGroup/Select/SelectProps.interface';

const FormHandler: React.FC<FormHandlerProps> = ({
  inputFields = [],
  textAreaFields = [],
  checkboxFields = [],
  selectFields = [],
  fieldOrder = ['input', 'textarea', 'select', 'checkbox'],
  btnText,
  onSubmit,

  className,
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
        validationOnFocus={field.validationOnFocus}
        disablePasswordHint={field.disablePasswordHint}
        onChange={field.onChange}
        size={field.size}
        maxLength={field.maxLength}
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
        validationOnFocus={field.validationOnFocus}
        name={field.name}
      />
    ));

  const renderCheckboxFields = () =>
    checkboxFields.map((field: CheckboxProps, index) => (
      <Checkbox
        key={index}
        name={field.name}
        label={field.label}
        checked={field.checked}
        onChange={field.onChange}
        size={field.size}
        title={field.title}
        disabled={field.disabled}
        indeterminate={field.indeterminate}
      />
    ));

  const renderSelectFields = () =>
    selectFields?.map((field: SelectProps, index) => (
      <Select key={index} {...field} />
    ));

  return (
    <form onSubmit={handleSubmit} className={`grid gap-4 ${className}`}>
      {fieldOrder.map((fieldType) => {
        switch (fieldType) {
          case 'input':
            return renderInputFields();
          case 'textarea':
            return renderTextAreaFields();
          case 'select':
            return renderSelectFields();
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
