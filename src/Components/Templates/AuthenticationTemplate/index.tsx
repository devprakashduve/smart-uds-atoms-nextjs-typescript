import React from 'react';
import { AuthenticationTemplateProps } from './AuthenticationTemplateProps.interface';
import './AuthenticationTemplate.css';

const AuthenticationTemplate: React.FC<AuthenticationTemplateProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="auth-template flex min-h-screen items-center justify-center bg-gray-100">
      <div className="auth-card w-full rounded-lg bg-white p-8 shadow-lg sm:w-96">
        <h1 className="auth-title mb-4 text-center text-2xl font-semibold">
          {title}
        </h1>
        <p className="auth-description mb-6 text-center text-gray-600">
          {description}
        </p>
        <div className="auth-form">{children}</div>
      </div>
    </div>
  );
};

export default AuthenticationTemplate;
