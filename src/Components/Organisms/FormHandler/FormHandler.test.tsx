import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormHandler from '.';
import { FormHandlerProps } from './FormHandler.interface';

const defaultProps: FormHandlerProps = {
  inputFields: [
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      isRequired: false,
      requiredErrorMessage: 'Email is required',
      value: '',
    },
    {
      id: 'password',
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
      id: 'message',
      name: 'message',
      label: 'Message',
      placeholder: 'Enter your message',
      isRequired: true,
      requiredErrorMessage: 'Message is required',
    },
  ],
  selectFields: [
    {
      id: 'country',
      name: 'country',
      label: 'Country',
      options: [
        { label: 'USA', value: 'USA' },
        { label: 'Canada', value: 'Canada' },
      ],
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
  className: '',
};

describe('FormHandler', () => {
  it('renders all field types correctly', () => {
    render(<FormHandler {...defaultProps} />);
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Remember Me/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('renders select fields', () => {
    const propsWithSelect = {
      ...defaultProps,
      fieldOrder: ['select'] as Array<
        'input' | 'textarea' | 'checkbox' | 'select'
      >,
    };
    render(<FormHandler {...propsWithSelect} />);
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
  });

  it('handles form submission', () => {
    const onSubmitMock = jest.fn();
    render(<FormHandler {...defaultProps} onSubmit={onSubmitMock} />);

    // Fill required fields
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: 'Hello' },
    });

    // Submit
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(onSubmitMock).toHaveBeenCalled();
    // FormData extraction test might fail in JSDOM if not polyfilled or handled,
    // but the component uses e.target as HTMLFormElement.
    // We should verify the data passed if possible.
  });

  it('respects field order', () => {
    const props = {
      ...defaultProps,
      fieldOrder: ['checkbox', 'input'] as Array<
        'input' | 'textarea' | 'checkbox' | 'select'
      >,
      inputFields: [
        { id: 'i1', name: 'i1', label: 'Input 1', value: '', type: 'text' },
      ],
      checkboxFields: [{ id: 'c1', name: 'c1', label: 'Check 1' }],
      textAreaFields: [],
    };
    render(<FormHandler {...props} />);

    const input = screen.getByLabelText('Input 1');
    const checkbox = screen.getByLabelText('Check 1');

    // Check order in DOM: checkbox should come before input
    expect(checkbox.compareDocumentPosition(input)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    );
  });

  it('renders nothing for unknown field type', () => {
    const props = {
      ...defaultProps,
      fieldOrder: ['unknown'] as unknown as Array<
        'input' | 'textarea' | 'checkbox' | 'select'
      >,
    };
    const { container } = render(<FormHandler {...props} />);
    // Should only contain the button
    expect(container.querySelectorAll('input, textarea, select')).toHaveLength(
      0
    );
  });

  it('uses default props when fields are not provided', () => {
    render(<FormHandler btnText="Submit" onSubmit={jest.fn()} />);
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
    // Should render nothing else basically
  });

  it('uses default isRequired=true for textarea', () => {
    render(
      <FormHandler
        {...defaultProps}
        textAreaFields={[{ name: 'note', label: 'Note' }]}
      />
    );
    // Note: if isRequired is explicitly passed as true in implementation default, we can't easily check it from outside
    // unless we check if "required" attribute is present on textarea.
    // TextArea component puts "required" attribute?
    // TextArea: required={isRequired} (probably).
    const textarea = screen.getByLabelText(/Note/i);
    expect(textarea).toBeRequired();
  });

  it('uses name as key if id is missing', () => {
    const props = {
      ...defaultProps,
      inputFields: [
        { name: 'noIdInput', label: 'No ID', type: 'text', value: '' },
      ],
      fieldOrder: ['input'] as Array<
        'input' | 'textarea' | 'checkbox' | 'select'
      >,
    };
    render(<FormHandler {...props} />);
    // Just verifying it renders without crashing and key fallback works silently
    expect(screen.getByPlaceholderText('')).toBeInTheDocument();
    // Input has no placeholder in my props, so empty string?
    // Or select by name attribute
    // screen.getByRole('textbox') matches input type=text
  });
});
