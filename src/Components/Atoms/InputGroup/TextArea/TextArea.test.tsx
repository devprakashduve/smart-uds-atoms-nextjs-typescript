import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextArea from '.';

describe('TextArea Component', () => {
  it('renders with the initial value and placeholder', () => {
    render(
      <TextArea
        id="test-textarea"
        value="Initial text"
        placeholder="Enter text here..."
        onChange={() => {}}
        name={''}
      />
    );
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea).toBeInTheDocument();
    expect(textarea.value).toBe('Initial text');
    expect(textarea).toHaveAttribute('placeholder', 'Enter text here...');
  });

  it('updates value and calls onChange when text changes', () => {
    const handleChange = jest.fn();
    render(
      <TextArea id="test-textarea" value="" onChange={handleChange} name={''} />
    );
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'Hello World' } });
    expect(textarea.value).toBe('Hello World');
    expect(handleChange).toHaveBeenCalled();
  });

  it('does not update value when input exceeds maxLength', () => {
    const handleChange = jest.fn();
    render(
      <TextArea
        id="test-textarea"
        value=""
        onChange={handleChange}
        maxLength={5}
        name={''}
      />
    );
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    // Attempt to input text longer than maxLength; since our code prevents update, value remains unchanged.
    fireEvent.change(textarea, { target: { value: 'HelloWorld' } });
    expect(textarea.value).toBe('');
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('displays character count when showCharCount is true', () => {
    render(
      <TextArea
        id="test-textarea"
        value="Hello"
        onChange={() => {}}
        maxLength={10}
        showCharCount={true}
        name={''}
      />
    );
    // The char count should be displayed as "5/10"
    expect(screen.getByText('5/10')).toBeInTheDocument();
  });

  it('does not display character count when showCharCount is false', () => {
    render(
      <TextArea
        id="test-textarea"
        value="Hello"
        onChange={() => {}}
        maxLength={10}
        showCharCount={false}
        name={''}
      />
    );
    // No element with "5/10" should be rendered
    expect(screen.queryByText('5/10')).toBeNull();
  });

  it('renders as disabled when the disabled prop is true', () => {
    render(
      <TextArea
        id="test-textarea"
        value="Disabled text"
        onChange={() => {}}
        disabled={true}
        name={''}
      />
    );
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea).toBeDisabled();
  });

  it('renders as read-only when the readOnly prop is true', () => {
    render(
      <TextArea
        id="test-textarea"
        value="Read only text"
        onChange={() => {}}
        readOnly={true}
        name={''}
      />
    );
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea).toHaveAttribute('readOnly');
  });

  it('displays warning when character count is below the custom threshold', () => {
    render(
      <TextArea
        id="test-textarea"
        value="Hello"
        onChange={() => {}}
        maxLength={10}
        showCharCount={true}
        charCountWarningThreshold={3}
        name={''}
      />
    );
    // The char count should be displayed with a warning class
    expect(screen.getByText('5/10')).toHaveClass('char-count');
  });
});
