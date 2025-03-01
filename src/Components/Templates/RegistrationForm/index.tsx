import React, { useState } from 'react';
import FormHandler from '../../Organisms/FormHandler';
import { RegistrationFormProps } from './RegistrationForm.interface';

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  formHandlerData,
  pageTitle,
  pageSubTitle,
}) => {
  const [error, setError] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (data: any) => {
    setError('');
    if (data?.password !== data.confirmPassword) {
      setError('Incorrect password!');
      return;
    }
    formHandlerData?.onSubmit(data);
  };
  return (
    <div className="registration-form mx-auto flex w-full max-w-md flex-col justify-center p-6">
      {pageTitle && pageTitle}
      {pageSubTitle && (
        <p className="flex justify-center text-gray-500">{pageSubTitle}</p>
      )}
      {error && <p className="flex justify-center text-error">{error}</p>}
      <FormHandler {...formHandlerData} onSubmit={handleSubmit} />
    </div>
  );
};

export default RegistrationForm;
