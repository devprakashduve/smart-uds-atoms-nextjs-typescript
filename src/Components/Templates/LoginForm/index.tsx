import React from 'react';
import FormHandler from '../../Organisms/FormHandler';
import { LoginFormProps } from './LoginForm.interface';

const LoginForm: React.FC<LoginFormProps> = ({
  formHandlerData,
  pageTitle,
  pageSubTitle,
  header,
  footer,
  className,
}) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {header && (
        <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
          {header}
        </header>
      )}
      <main
        className={`flex flex-1 items-center justify-center ${
          className ?? 'bg-gradient-to-t from-yellow-100 via-lime-100 to-yellow-100'
        }`}
      >
        <div className="login-form mx-auto flex w-full max-w-md flex-col justify-center p-6">
          {pageTitle && pageTitle}
          {pageSubTitle && (
            <p className="flex justify-center text-gray-500">{pageSubTitle}</p>
          )}
          <FormHandler {...formHandlerData} />
        </div>
      </main>
      {footer && (
        <footer className="bg-white border-t border-gray-200">{footer}</footer>
      )}
    </div>
  );
};

export default LoginForm;
