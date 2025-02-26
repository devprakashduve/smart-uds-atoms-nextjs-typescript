import { useState } from 'react';
import Input from '../../../Components/Atoms/InputGroup/Input';
import Button from '../../../Components/Atoms/Button';
import { RegistrationTemplateProps } from './RegistrationTemplate.interface';

export default function RegistrationTemplate({
  inputFields,
  error: initialError,
  handleSubmit: propHandleSubmit,
  title,
  registerButtonText,
  registerButtonChild,
}: RegistrationTemplateProps) {
  const [error, setError] = useState(initialError);

  const handleSubmit: RegistrationTemplateProps['handleSubmit'] = (e) => {
    e.preventDefault();
    const hasEmptyField = inputFields.some((field) => !field.value);
    if (hasEmptyField) {
      setError('All fields are required');
      return;
    }
    const passwordField = inputFields.find(
      (field) => field.name === 'password'
    );
    const confirmPasswordField = inputFields.find(
      (field) => field.name === 'confirmPassword'
    );
    if (
      passwordField &&
      confirmPasswordField &&
      passwordField.value !== confirmPasswordField.value
    ) {
      setError('Passwords do not match');
      return;
    }
    // Handle registration logic here
    console.log(
      'Registering:',
      inputFields.reduce(
        (acc, field) => ({ ...acc, [field.name]: field.value }),
        {}
      )
    );
    if (propHandleSubmit) propHandleSubmit(e);
  };

  return (
    <div className="registration-template">
      <h2>{title}</h2>

      <form onSubmit={handleSubmit}>
        {inputFields.map((field) => (
          <div className="mb-4" key={field.id}>
            <Input
              id={field.id}
              name={field.name}
              label={field.label}
              type={field.type}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              placeholder={field.placeholder}
              isRequired={field.isRequired}
              requiredErrorMessage={field.requiredErrorMessage}
              showIcon={true}
              disablePasswordHint={field.disablePasswordHint}
              validationOnFocus={field.validationOnFocus}
            />
          </div>
        ))}
        <div className="mt-6">
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Button type="submit" className="w-full">
            {registerButtonText}
            {registerButtonChild}
          </Button>
        </div>
      </form>
    </div>
  );
}
