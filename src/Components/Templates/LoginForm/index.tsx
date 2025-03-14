import React from 'react';
import FormHandler from '../../Organisms/FormHandler';
import { LoginFormProps } from './LoginForm.interface';
import Section from '../../../Components/Organisms/Section';

const LoginForm: React.FC<LoginFormProps> = ({
  formHandlerData,
  pageTitle,
  pageSubTitle,
}) => {
  return (
    <Section
      heading={''}
      subheading={''}
      border={false}
      textAlign={'center'}
      className="bg-gradient-to-t from-yellow-100 via-lime-100 to-yellow-100"
    >
      <div className="login-form mx-auto flex w-full max-w-md flex-col justify-center p-6">
        {pageTitle && pageTitle}
        {pageSubTitle && (
          <p className="flex justify-center text-gray-500">{pageSubTitle}</p>
        )}
        <FormHandler {...formHandlerData} />
      </div>
    </Section>
  );
};

export default LoginForm;
