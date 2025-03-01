import React from 'react';
import { render, screen } from '@testing-library/react';
import FormHandler from '.';
import { FormHandlerProps } from './FormHandler.interface';

const defaultProps: FormHandlerProps = {
  inputFields: [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      isRequired: false,
      requiredErrorMessage: 'Email is required',
      value: '',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      isRequired: false,
      requiredErrorMessage: 'Password is required',
      value: '',
    },
  ],
  textAreaFields: [
    {
      name: 'message',
      label: 'Message',
      placeholder: 'Enter your message',
      isRequired: true,
      requiredErrorMessage: 'Message is required',
    },
  ],
  checkboxFields: [
    {
      name: 'rememberMe',
      label: 'Remember Me',
      checked: false,
    },
  ],
  fieldOrder: ['input', 'textarea', 'checkbox'],
  btnText: 'Submit',
  onSubmit: jest.fn(),
  validationOnFocus: true,
};

describe('FormHandler', () => {
  it('renders checkbox fields', () => {
    render(<FormHandler {...defaultProps} />);
    expect(screen.getByLabelText('Remember Me')).toBeInTheDocument();
  });
});
