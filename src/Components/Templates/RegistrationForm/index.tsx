import React from 'react';
import FormHandler from '../../Organisms/FormHandler';
import { RegistrationFormProps } from './RegistrationForm.interface';

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  formHandlerData,
  pageTitle,
  pageSubTitle,
}) => {
  return (
    <div className="registration-form mx-auto flex w-full max-w-md flex-col justify-center p-6">
      {pageTitle && pageTitle}
      {pageSubTitle && (
        <p className="flex justify-center text-gray-500">{pageSubTitle}</p>
      )}
      <FormHandler {...formHandlerData} />
    </div>
  );
};

export default RegistrationForm;
